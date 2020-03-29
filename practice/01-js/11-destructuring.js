/**
 * При роботі з об'єктами і масивами часто виникає потреба винести те чи інше поле або елемент масиву в змінну. Для того, щоб не копіювати назви і значення руками, існує деструктуризація
 */

 /**
  * Маємо об'єкт
  */
const meme = {
    id: 1,
    name: "pepe",
    createdAt: new Date(),
    someField: "blabla",
    kek: {
        cheburek: "dsada"
    }
};

// Ми можемо винести значення id вручну
// const id = meme.id;

// А зробити так (аналогічний результат). При чому назва поля в фігурних дужках має бути таким самим як в об'єкті
const { id } = meme;



// Крім того, під час диструктуризації ми можемо задати іншу назву новій змінній
const {
    id: memeId,
    createdAt,
    kek: { cheburek },
    ...otherFields
} = meme;

// Таким чином в нас створились змінні memeId, createdAt, cheburek, otherFields (об'єкт, який включає в себе всі інші поля, крім вище перелічених)

// console.log(otherFields);



// Також ми можемо диструктуризувати масиви
const memes = ['pepe', 'harold', { key: 'value', name: 'name' }, 'string 1', 'string 2', 'string 3', 'string 4', 'another string'];

const [pepe, harold, { key, name }, , , ...otherMemes] = memes;

// В результаті ми отримаємо змінні pepe, harold, key, name, otherMemes (масив, який включатиме в себе всі інші елементи після тих, які були диструктуризовані)
// console.log(otherMemes);


// spread оператор може використовуватись як для комбінації з диструктуризацією, як ми побачили вище, так і для запису полей в об'єкти, масиви, або при виклику функцій.
const anotherMeme = {
    ...meme,
    someCustomField: 555, // буде приєднано додаткове поле, якого немає в meme
    id: 321 // можемо перезаписати поле з об'єкту meme
  };

//   console.log('anotherMeme');
//   console.log(anotherMeme);



const anotherMemes = ["1", "2", "3"];

// Всі елементи масиву будуть по порядку передані в аргументи функції при виклику, ніби memes.push("1", "2", "3");
// memes.push(...anotherMemes);
// console.log(memes);




// Ми можемо також "розпилити" масив, і вставити додаткові елементи в середину.
// const anotherList = ["noop", ...anotherMemes, "noop"];
// console.log(anotherList);





// spread можна використовувати для позначення "rest" або інших аргументів.
// В даному випадку "args" буде мати в собі будь яку кількість переданих аргументів у вигляді масиву
const add = (...args) => {
    console.log('args');
    console.log(args);
    return args.reduce((result, item) => result + item, 0);
}

// console.log(add(1, 2, 3, 4, 5))