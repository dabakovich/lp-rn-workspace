// Часом нам потрібно виконувати якісь асинхронні операції (наприклад читання файлової сисетми, http запити, і тп), або ж мати змогу реагувати на якісь події (наприклад клік мишки на елементів в dom). Одним з рішень є "callback".
// Колбеки - це функції, які передаються як парметри в інших функціях, і викликається у певний момент функції для того, щоб захендлити якусь конкретну подію.
// Функція, яка приймає колбек другим параметром
const sendMessageWithCallback = (message, callback) => {
    console.log(`Sending message "${message}"`);

    setTimeout(() => {
        console.log('Calling callback...')
        callback()
    }, 4000);
}

(
    () => sendMessageWithCallback(
        'First message',
        () => console.log('After sending first message')
    )
);







// Функція, яка приймає колбек другим параметром, в який можна передавати параметри
const sendMessageWithImprovedCallback = (message, callback) => {
    console.log(`Sending message "${message}"`);

    setTimeout(() => {
        console.log('Calling callback...')

        // В 40% випадків буде випадати помилка
        let error = Math.random() < 0.4 ? 'Error!' : null;
        let response = `Successfully sent: "${message}"`;


        callback(error, response);
    }, 1000);
}

(
    () => sendMessageWithImprovedCallback(
        'First message',
        (error, response) => {
            if (error) {
                console.error(error);
                return;
            }

            console.log(response);
        },
    )
);






/**
 * Проблеми починаються, коли зростає потреба у кількості викликів таких вкладених колбеків
 */
(
    () => sendMessageWithCallback(
        'First message',
        () => {
            console.log('Finished sending first message');

            sendMessageWithCallback(
                'Second message',
                () => {
                    console.log('Finished sending second message');

                    sendMessageWithCallback(
                        'Third message',
                        () => {
                            console.log('Finished sending third message');
                            console.log('Finished sending messages');
                        }
                    );
                }
            );
        }
    )
);