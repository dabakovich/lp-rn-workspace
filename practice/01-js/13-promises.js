/**
 * Метод для виконання асинхронної операції з використанням Promise
 */
const sendMessageWithPromise = (message) => {
    console.log(`Sending message "${message}"`);

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Resolving promise...')
            resolve();
        }, 4000);
    });
};

(
    () => sendMessageWithPromise('First message')
        .then(() => console.log('After sending first message'))
);






/**
 * Вже очиведними є переваги промісів в порівнянні з колбеками
 */
(
    () => sendMessageWithPromise('First message')
        .then(() => sendMessageWithPromise('Second message'))
        .then(() => sendMessageWithPromise('Third message'))
        .then(() => sendMessageWithPromise('Fourth message'))
        .then(() => sendMessageWithPromise('Fifth message'))
);






/**
 * Проміси дозволяють також легко та безболісно передавати параметри, а також викидати помилки
 */
const sendMessageWithImprovedPromise = (message) => {
    console.log(`Sending message "${message}"`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Resolving promise...')

            let error = Math.random() < 0.4 ? `Error, sending "${message}" message!` : null;
            let response = `Successfully sent: "${message}"`;

            if (error) {
                reject(error);
            }

            resolve(response);
        }, 4000);
    });
};

(
    () => sendMessageWithImprovedPromise('First message')
        .then(() => sendMessageWithImprovedPromise('Second message'))
        .then(() => sendMessageWithImprovedPromise('Third message'))
        .then(() => sendMessageWithImprovedPromise('Fourth message'))
        .then(() => sendMessageWithImprovedPromise('Fifth message'))
        .catch((e) => console.error(e))
);






/**
 * Проміси мають кілька класних методів. Наприклад, мені потрібно викликати кілька методів паралельно.
 */
const getRandom = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const request = (payload, timeout = getRandom(1000, 3000)) => {
    console.log(`Making request with "${payload}" payload`)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(`Resolving promise ${payload}...`);

            let error = Math.random() < 0.2 ? `Error, making "${payload}" request!` : null;
            let response = `Finished request "${payload}"`;

            if (error) {
                reject(error);
            }


            resolve(response);
        }, timeout);
    });
};






/**
 * Promise.all
 */
(
    () => {
        const requests = [
            request('Weather payload'),
            request('Currency payload'),
            request('Third request'),
            request('Fourth request'),
            request('Fifth request'),
        ];

        Promise
            .all(requests)
            .then(console.log)
            .catch(console.error);
    }
);






/**
 * Promise.race
 */
(
    () => {
        const minTimeout = 3000;
        const maxTimeout = 7000;

        const requests = [
            request('Timeout 5 sec', 5000),
            request('User answered', getRandom(3000, 7000)),
        ];

        Promise
            .race(requests)
            .then((response) => {
                console.log('We got winner!');
                console.log(response);
            })
            .catch(console.error);
    }
);






/**
 * Все ж, слід визнати, що працювати навіть з таким ланцюжком викликів асинхронного коду не є так зручно,
 * як працювати з синхронним кодом. Для цього нам дуже корисними будуть async/await
 */




module.exports = {
    sendMessageWithPromise,
    sendMessageWithImprovedPromise,
    request
};
