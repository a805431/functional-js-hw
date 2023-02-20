function doubleAll(numbers){
    return numbers.map((elem) => elem*2);
}

module.exports = doubleAll;

let nums = [1,2,3,4,5,6,7,8,9];

console.log(doubleAll(nums));