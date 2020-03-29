console.log('--- FOR LOOPS ---');

for (let for_i = 0; for_i < 10; for_i++) {
    // do something
    console.log(for_i);

    // if (for_i == 7) continue;
    // console.log('After continue');

    // if (for_i == 5 || for_i == 8) break;
    // console.log('After break');
}




console.log('\n\n--- WHILE LOOPS ---');

let while_i = 0;
do {
    // do something
    console.log(while_i);

    while_i++;
} while (while_i < 10)




console.log('\n\n--- FOR ... IN ---');

const something = {
    kek: 'cheburek',
    another: 'field'
};

for (let key in something) {
    console.log(`${key}: ${something[key]}`);
}




console.log('\n\n--- FOR ... OF ---');

const array = [1, 2, 'kek', 'chburek'];
console.log(array);
array.someProp = 'value';
console.log(array);

for (let element of array) {
    console.log(element);
}




console.log('\n\n--- DIFFERENCE BETWEEN FOR ... OF AND FOR ... IN ---');

console.log('\n');
for (let element in array) {
    console.log(element);
}
process.exit(0);
