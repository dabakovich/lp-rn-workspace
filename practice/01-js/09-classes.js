console.log('\n\n--- FUNCTIONAL OBJECTS ---');
function makePerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

function getFullName(person) {
    return person.firstName + ' ' + person.lastName;
}

function getInitials(person) {
    return person.firstName.charAt(0) + person.lastName.charAt(0);
}

const person1 = makePerson("Kek", "Cheburek");
console.log(person1);
console.log(getFullName(person1)); // Kek Cheburek
console.log(getInitials(person1)); // KC



console.log('\n\n--- FUNCTIONAL CONSTRUCTOR ---');

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
}

Person.staticField = 'Static value';

Person.prototype.getInitials = function() {
    return this.firstName.charAt(0) + this.lastName.charAt(0);
};

const person2 = new Person('John', 'Smith');

console.log(person2);
console.log(person2.getFullName())
console.log(person2.getInitials())




console.log('\n\n--- CLASSES ---');

class PersonClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.getFullName = function () {
            return this.firstName + ' ' + this.lastName;
        };
    }

    // static staticField = 'Static'

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set firstName(value) {
        
    }

    getInitials() {
        return this.firstName.charAt(0) + this.lastName.charAt(0);
    }
}

// PersonClass.staticField = 'Static value';

const person3 = new PersonClass('Mike', 'James');
console.log(person3);
console.log(person3.fullName);

process.exit(0);
