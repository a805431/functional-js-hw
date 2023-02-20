module.exports = function arrayMap(arr, fn) {
    return arr.reduce((acc, arrElem) => {acc.push(fn(arrElem)); return acc;}, []);
  }

/*Here's the official solution in case you want to compare notes:

module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
    }, [])
    }*/