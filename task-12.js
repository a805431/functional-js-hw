
//function Spy() е custom constructor function
function Spy(target, method) {
    // SOLUTION GOES HERE
    this.count = 0;
    
    // constructor(){
    //   this.count += 1;
    //   target.apply(target, method);
    // }
  }

  module.exports = Spy

  // var spy = Spy(console, 'error')

  // console.error('calling console.error')
  // console.error('calling console.error')
  // console.error('calling console.error')

  // console.log(spy.count) // 3

  let mySpy = function(){
    let count = 0;

    return function(){
      count++;
      return count;
    }
  }();

  console.log(mySpy());
  console.log(mySpy());
  console.log(mySpy());
  console['log']('hello');
