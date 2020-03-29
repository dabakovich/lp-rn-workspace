/**
 * Основне, що нам потрібно від typescript - можливість оголошувати типи змінних, полей, аргументів, значень, які повертаються з функцій і методів. Для цієї ціді ми маємо анотації типів.
*/

// let word: string;

// word = '123';

// word = 123;

// word = (123).toString();



// let count = 123;

// count = 'some string';




/**
 * TS має набір влаштованих типів як для примітивних значень, так і для типів посилань
 * 
 * string
 * number
 * boolean
 * object // not Object
 * {}
 * any
 * unknown
 * never
 * nul
 * undefined
 * []
 */





/**
 * Функції
 */
function doSomething(arg: string, arg1: number): number {
    const value = Number(arg);

    if (isNaN(value)) throw new Error("Opps, value is not a number");

    return value * arg1;
}

/**
 * АБО
 */
const doSomethingArrow = (arg: string, arg1: number): number => {
    return doSomething(arg, arg1);
};


/**
 * error {} type is not string
 */
// console.log(doSomething({}, 2));


// const result = doSomething("123", 2);
// console.log(result);






/**
 * Методи і поля
 */
class Pepe {
    // property
    public scream: string = "reeeeeeeeeee";

    // method
    public laugh(reason: {}): void {
        console.log("OH NO NO NO");
    }

    // arrow function property
    public reeeeee = (...args: any[]): string => {
        console.log(this.scream);

        return this.scream;
    };
}

const pepe = new Pepe();

pepe.reeeeee();






export {};
