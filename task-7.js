
function reduce(arr, fn, initial) {
    if(arr.length <= 0){
        return initial;
    }else{
        let firstArrayElem = arr.shift();
        return reduce(arr, fn, fn(initial, firstArrayElem));
    }
}

module.exports = reduce;

const myFun = function(x, y) {
    return x+y;
}

const secFun = (acc, word) => {
    const currCount = acc[word] ?? 0;
    return {
        ...acc,
        [word]: currCount + 1,
    };
};

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

console.log(reduce(inputWords, secFun, {}));
console.log(reduce([1,2,3], myFun, 0));

console.log(reduce([1,2,3], function(prev, curr, index, arr) {
return prev + curr}, 0));