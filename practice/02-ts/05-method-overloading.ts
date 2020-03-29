function getArrayOfStrings(value: string): string[]
function getArrayOfStrings(value: string[]): string[]
function getArrayOfStrings(value: string | string[]): string[]{
    const arrayOfStrings: string[] = [];

    if (typeof value === 'string') {
        arrayOfStrings.push(value);
    }
    else if (Array.isArray(value)) {
        arrayOfStrings.concat(value);
    }

    return arrayOfStrings;
}

console.log(getArrayOfStrings('String'));

console.log(getArrayOfStrings(['First sring', 'Second string', 'Third string']));

// function getArrayOfStrings(value: string, ...restValues: string[]): string[]