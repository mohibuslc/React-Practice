

// Array Destructuring :



//const numbers = [45, 98];


// const x = numbers[0];
// const y = numbers[1];

// console.log(x,y);

// function :


function TestNumber(num1){

return [num1 , num1+5];
}
//-------------------------------------------------
// One Array :

//================================.
//const Numbers = TestNumber(8);
//console.log(Numbers);
//------------------------------------------------------------------
// if you want use 2 Array:

const [Numbers1 , Numbers2]= TestNumber(8);

console.log(Numbers1, Numbers2);
