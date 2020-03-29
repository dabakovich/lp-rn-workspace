/**
 * Typescript також включає в себе деякі фічі, які не мають відношення до типів
 * 
 * Це наприклад ініціалізація полей класів не в конструкторі, а прямо в оголошенні класу, async await і тому подібне
 */


class SomeClass {
    public field: string = 'value'
}






/**
 * Також є 2 "оператори", які відносяться скоріше до синтаксису, і ми їх трохи розглянемо.
 *
 * 
 * 
 * OPTIONAL CHAINING
 */

// Маємо об'єкт з декількома рівнями вкладеності
type SomethingType = {
    deeply?: {
        nested?: string;
    };
}

const something: SomethingType = {
    deeply: {
        nested: "mmm",
    }
};

// В таких випадках зазвичай існують перевірки
function getNested(object: SomethingType) {
    return object && object.deeply && object.deeply.nested;
}

// Для цього в TS є optional chaining
function getNestedImproved(object: SomethingType) {
    return object?.deeply?.nested; // undefined, якщо якесь значення по дорозі undefined || null
}






/**
 * NULL COALESCING
 * Іноді нам потрібно знати, чи є визначеним якесь поле в об'єкті, чи ні. І якщо воно не визначене, то слід присвоїти якесь інше значення
 * 
 * Приклад взято звідси: https://github.com/microsoft/TypeScript/issues/26578
 */


interface Configuration {
    // Default: "(no name)"; empty string IS valid
    name?: string;

    // Default: -1; 0 is valid
    items?: number;

    // Default: true; may be false
    active?: boolean;
}



function configureSomething(config: Configuration) {
    // Using || operator (INCORRECT)
    config.name = config.name || "(no name)"; // does not allow for "" input
    config.items = config.items || -1; // does not allow for 0 input
    config.active = config.active || true; // really bad, always true




    // One of the solutionss
    config.name = config.name != null ? config.name : "(no name)";
    config.items = config.items != null ? config.items : -1;
    config.active = config.active != null ? config.active : true;




    // With null-coalescing operator
    config.name = config.name ?? "(no name)";
    config.items = config.items ?? -1;
    config.active = config.active ?? true;
}