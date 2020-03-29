console.log('--- CLASSIC FUNCTIONS ---');

function doSomething(a, b, c) {
    
    return a + b + c;
}

console.log(doSomething());
console.log(doSomething(1));
// console.log(doSomething(1, 2, 3));
console.log(doSomething(1, 2, 3, 4));




console.log('--- CLASSIC ANONYMOUS FUNCTIONS ---');

const doSomething1 = function (a, b, c) {
    console.log('In the anonymous function')
    const sum = a + b + c;

    console.log(sum);
    return sum;
}
doSomething1(-1, 0, 1);




console.log('\n\n--- ARGUMENTS IN CLASSIC FUNCTIONS ---');

function doSomething2() {
    console.log('In function');
    console.log(arguments);
    return arguments.length;
}

console.log(doSomething2());
console.log(doSomething2(1));
console.log(doSomething2(1, 2, 3));
console.log(doSomething2(1, 2, 3, 4, 5));



console.log('\n\n--- ARROW FUNCTIONS ---');

const doSomething3 = (a, b, c) => {
    return a + b + c;
}

console.log(doSomething3(1, 2, 3));



const doSomething4 = (a, b, c) => a + b + c;

console.log(doSomething4(4, 5, 6));
process.exit(0);
