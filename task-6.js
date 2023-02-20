
// Given an Array of strings, use Array#reduce to create an object 
// that contains the number of times each string occured in the array. 
// Return the object directly (no need to console.log).

function countWords(inputWords){
    return inputWords.reduce((acc, word) => {
        const currCount = acc[word] ?? 0;
        return {
            ...acc,
            [word]: currCount + 1,
        };
    }, {});
}

module.exports = countWords;

// var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
// console.log(countWords(inputWords));