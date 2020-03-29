



function getNumberValue(value: number) {
    return value;
}

function getStringValue(value: string) {
    return value;
}

function getObjectValue(value: {property: any}) {
    return value;
}



const numberValue = 5;

const stringValue = '5';

const objectValue = {property: 'kek'};


const result = getObjectValue(objectValue);












/**
 * GENERIC FUNCTIONS
 */
function getValue<T>(value: T): T {
    return value;
}


const genericResult = getValue(objectValue);













/**
 * GENERIC INTERFACES AND CLASSES
 */

interface ValueRepositoryI<U> {
    value: U
    getValue: () => U
}

class ValueRepository<T> implements ValueRepositoryI<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue: () => T = () => {
        return this.value;
    }
}

const valueRepository = new ValueRepository<number>(5);













/**
 * REAL EXAMPLE
 */

interface Virus {
    isKilled: boolean;
    incubationPeriod: number;
}

class EbolaVirus implements Virus {
    isKilled = false
    incubationPeriod = 2

    // Specific field
    weigth = 200
}

class CoronaVirus implements Virus {
    isKilled = false
    incubationPeriod = 14

    // Specific field
    size = 500
}



function killVirus<T extends Virus>(virus: T): T {
    console.log('Got virus');

    console.log('Calling antibodies');

    console.log('Killing virus');
    virus.isKilled = true;

    console.log('Returning killed virus')
    return virus;
}



const ebolaVirus = new EbolaVirus();
const coronaVirus = new CoronaVirus();

const killedEbolaVirus = killVirus<EbolaVirus>(ebolaVirus);
const killedCoronaVirus = killVirus(coronaVirus);

export { };
