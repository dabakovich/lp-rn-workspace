const { sendMessageWithImprovedPromise, request } = require("./13-promises");

/**
 * Генератори це функції, які можуть викликатись в кілька етапів. Фактично при виклику генератора, генерується об'єкт, з допомогою якого ми можемо зрозуміти статус виконання функції, і рухатись далі, якщо функція-генератор ще не завершилась
*/







function* count() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const counter = count();

// console.log(counter);

// console.log(counter.next()); // { done: false, value: 1 }
// console.log(counter.next()); // { done: false, value: 2 }
// console.log(counter.next()); // { done: false, value: 3 }
// console.log(counter.next()); // { done: false, value: 4 }
// console.log(counter.next()); // { done: true, value: undefined }





function* anotherGenerator() {
    // yield* перебирає переданий генератор замість нас.
    yield* count();
}

// of приймає щось iterable, як в нашому випадку
// for (let i of anotherGenerator()) {
//     console.log(i);
// }
// Виведе 1 - 4





// Також є можливість зробити асинхронний генератор

// Проміс, який виконається через [delay] мс
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

// Функція буде повертати символ по індексу з переданого рядка раз в секунду
async function* say(word) {
    for (let i = 0; i < word.length; i++) {
        await sleep(1000);

        yield word[i];
    }
}

const run = async () => {
    for await (let char of say("slowpoke")) {
        console.log(char);
    }
};

// run();





function* gen() {
    // Передаємо запитання у зовнішній код, і чекаємо відповідь
    let result = yield "Some async operation";
    console.log('In generator')
    console.log(result);


    // result = yield "Some another async operation";
    // console.log('In generator')
    // console.log(result);
}

// let generator = gen();

// let question = generator.next().value;
// console.log(question);

// setTimeout(() => generator.next(4), 2000);





function* genWithPromise() {
    // Передаємо проміс у зовнішній код, і чекаємо відповідь
    let result = yield new Promise((resolve) => {
        setTimeout(() => resolve('Response from server'), 2000)
    });
    console.log('In generator')
    console.log(result);
}

// let generatorWithPromise = genWithPromise();

// let question = generatorWithPromise.next().value;
// console.log(question);

// question.then((response) => generatorWithPromise.next(response));








function* sendFewMessages() {
    try {
        let response;
        response = yield sendMessageWithImprovedPromise('First message');
        console.log(response);

        response = yield sendMessageWithImprovedPromise('Second message');
        console.log(response);

        response = yield sendMessageWithImprovedPromise('Third message');
        console.log(response);

        return 'Successfully sent all messages';
    } catch (e) {
        // ...
    }
};



function execute(generator, yieldValue) {

    let next = generator.next(yieldValue);

    if (!next.done) {
        next.value.then(
            result => execute(generator, result),
            err => generator.throw(err)
        );
    } else {
        // обработаем результат return из генератора
        // обычно здесь вызов callback или что-то в этом духе
        console.log('Generator was finished');
    }

}

execute(sendFewMessages());