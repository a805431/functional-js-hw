function operation() {

}
//required concept for REACT
//higher order functions
function repeat(operation, num){
    if(num <= 0){
        return;
    }else{
        console.log(`Call ${num}:\n`);
        return repeat(operation, --num);
    }
    // for(let i = num; i<0; i--){
    //     operation();
    // }
}

module.exports = repeat;

repeat(operation, 5);