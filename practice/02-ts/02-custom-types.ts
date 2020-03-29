/**
 * Крім влаштованих типів, ми маємо можливість оголошувати власні типи. Для цього існують кілька способів
 * 
 * Перший - keyword "type"
 */

/**
 * Цей keyword дає можливість визначити власний тип
 * 
 * Найпростіший спосіб застосування - аліас іншого типу, щоб здебільшого робити не рекомендується
 */
type Aliased = string;



/**
 * В даному випадку ми оголошуємо об'єкт з 4 полями, 1 з яких необов'язковий
 */
type Meme = {
    name: string;
    popularity: number;
    firstPostedAt: Date;
    creator?: string;
};


type Post = {
    views: number;
};


/**
 * Ми можемо суміщати типи, роблячи з них union types
 */
type Text = string | number;

/**
 * Або так
 * PostedMeme містить 4 поля з Meme & 1 поле з Post
 */
type PostedMeme = Meme & Post;



let value: Text;
let check = (text: string) => {
    // ...
};


/**
 * Потрібно привести до відповідного типу, коли потрібно уточнення, для цього є 'as' оператор, який "намагається" привести тип до вказаного
 */
check(value as string);

/**
 * Або так (не працює в TSX файлах)
 */
check(<string>value);






/**
 * ІНТЕРФЕЙСИ
 * 
 * В більшості по функціоналу відповідають "type", але з певними відмінностями
 * I на початку назви - класична конвенція, щоб відрізнити інтерфейси від інших типів або класів.
 */
interface IMeme {
    name: string;
    popularity: number;
    firstPostedAt: Date;
    creator?: string;
}

interface IPost {
    views: number;
}
/**
 * Інтерфейси можуть бути змерджені
 */
type memeInterface = IMeme & IPost;





/**
 * КЛАСИ
 * 
 * Класи теж є одним зі способів оголошення типу, але на відміну від "type"/"interface", клас не буде видалений при компіляції в js. Будуть видалені лише спеціфічні для TS частини коду
 */
class MemeClass {
    public name: string;
    public firstPostedAt: Date;
    private popularity: number;
    protected creator?: string;
}



/**
 * Клас може взаємодіяти з інтерфейсами, реалізуючи їх
 */
class MemeImpl implements IMeme {
    /**
     * При реалізації інтерфейсу, ми маємо задовольнити все, що описано в інтерфейсі (поля, методи)
     */
    public name: string;
    public firstPostedAt: Date;


    // public popularity: number;
    // popularity missing - якщо будь-яке обов'язкове поле відсутнє, ми отримаємо помилку
    // creator field is optional in interface so ok
}




/**
 * В класі ми могли помітити різні ключові слова навпроти полей і методів
 */
class Parent {
    // бачимо всюди
    public doYouLikeWhatYouSee?: boolean;
    // бачимо тільки в середині класу
    private mmm: string;
    // бачимо в нащадках класу
    protected goodAdvice: { text: string };

    public iAmSorry() {
        this.doYouLikeWhatYouSee; // ok
        this.mmm; // ok
        this.goodAdvice; // ok
    }
}



class Child extends Parent {
    public sorryForWhat?() {
        this.mmm; // error,
        this.goodAdvice; // ok; доступен ниже по иерархии
    }
}



const steve = new Child();

steve.doYouLikeWhatYouSee; // доступний
steve.mmm; // не доступний
steve.goodAdvice; // не доступний

export { };
