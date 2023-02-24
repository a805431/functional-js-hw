
//function Spy() е custom constructor function
function Spy(target, method) {
    // SOLUTION GOES HERE
    let count = 0;

    let originalMethod = target[method];
    let self = this;
    
    this.f = function(){
      count += 1;
    }()

    target[method] = function(){
      self.f();
      originalMethod.call(this, ...arguments);
    }
  }

  // class Spy {
  //   constructor(obj, method) {
  //     this.count = 0
  
  //     const _method = obj[method] // save the ref to the original method
  //     const self = this
  
  //     // wrap the method call with additional logic
  //     obj[method] = function () {
  //       self.count++
  //       _method.call(this, ...arguments)
  //     }
  //   }
  // }
  
  module.exports = Spy

  let spy = Spy(console, 'error')

  console.error('calling console.error')
  console.error('calling console.error')
  console.error('calling console.error')

  console.log(spy.count) // 3

  // let mySpy = function(){
  //   let count = 0;

  //   return function(){
  //     count++;
  //     return count;
  //   }
  // }();

  // console.log(mySpy());
  // console.log(mySpy());
  // console.log(mySpy());
  // console['log']('hello');
