const memes = ['kek', 'cheburek', 'pepe', 'harold'];

// const memes = new Array(5);

console.log(memes);
console.log(memes.length);
memes[10] = 'new string';
console.log(memes.length);



console.log('\n\n--- ITERATION FOR ... IN ---')

for (let i = 0; i < memes.length; i++) {
    const meme = memes[i];
    console.log(meme);
}




console.log('\n\n--- ITERATION LET ... OF ---')

for (let meme of memes) {
    console.log(meme);
}



console.log('\n\n--- ITERATION FOREACH ---')

memes.forEach(meme => {
    console.log(meme);
});



console.log('\n\n--- MAP ---')

const mappedMemes = memes.map(meme => {
    return meme.toUpperCase();

    // return {
    //     meme: meme,
    //     memeLength: meme.length,
    // }
});
console.log(memes);
console.log(mappedMemes);




console.log('\n\n--- REDUCE ---')

const numbers = [10, 2, 333, -4, 0];
const reducedNumbers = numbers.reduce((result, number) => result + number, 0);
console.log(reducedNumbers);





console.log('\n\n--- FILTER ---')

console.log(numbers);
console.log(numbers.filter(number => {
    return number > 0;
}));
console.log(numbers);





console.log('\n\n--- PUSH ---')

memes.push('somestring');
console.log(memes);





console.log('\n\n--- UNSHIFT ---')

memes.unshift('anotherstring');
console.log(memes);





console.log('\n\n--- POP ---')

console.log(memes.pop());
console.log(memes);





console.log('\n\n--- SHIFT ---')

console.log(memes.shift());
console.log(memes);





console.log('\n\n--- SLICE ---')

console.log(memes.slice(0, 2));
console.log(memes);





console.log('\n\n--- SPLICE ---')

console.log(memes.splice(0, 2));
console.log(memes);

process.exit(0);




console.log('\n\n--- SORT ---')

console.log(numbers);
console.log(numbers.sort((prev, next) => prev - next));
console.log(numbers);





console.log('\n\n--- SOME ---')

console.log(numbers.some((item) => item == 0));





console.log('\n\n--- EVERY ---')

console.log(numbers.every((item) => item > 0));
// console.log(numbers.every((item) => typeof item === 'number'));





console.log('\n\n--- INCLUDES ---')

console.log(numbers.includes('333'));
console.log(numbers.includes(333));





console.log('\n\n--- FIND ---')

console.log(numbers);
console.log(numbers.find((item) => item > 2));





console.log('\n\n--- JOIN ---')

console.log(['a', 'lot', 'of', 'some', 'strings'].join(',\n'));