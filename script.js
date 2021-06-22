//var array1 = [2,7,4,90,1,3,7,49,78]

// odd even

//console.log(array1[3])

//for(i=0;i <array1.length ; i++){
  // if( array1[i] % 2 == 0 ){
    //   console.log( array1[i] , 'number is even')
   //}else{
      // console.log(array1[i] , 'number is odd')
  // }
//}

//largest number
//function largest(array1) {
	//var large = array1[0];
	//for(var i=1; i<array1.length; i++) {
		//if(large < array1[i]) {
			//large = array1[i];
		//}
	//}
	//return large;
//}

//var output = largest(array1);

//console.log(output); 
//middle element
//function  middle(array1){
//	var middle=array1[0];
//	for(var i=0; i<array1.length; i++){
//		if(middle<array1[i]){}
//		var middle = arr[arr.length / 2 | 0];
  //       middle=array1[i];

	//}
//}
//return array[array.length/2];
//}
//var output=middle(array1);

//console.log(output);


//find array contains specific elements
//function contains(array1, element) {
    //for (var i = 0; i < array1.length; i++) {
        //if (array1[i] === element) {
           // return true;
      //  }
   // }
   // return false;
//}
//console.log(contains(array1, 2));


//sort largest to smallest
//function sortGreatest(array1) {
  //for ( i = 0; i < array1.length; i++) {
    //for ( j = i+1; j < array1.length; j++) {
      //if (array1[i] < array1[j]) {
        // temp = array1[i]; // store original value for swapping
        //array1[i] = array1[j]; // set original value position to greater value
        //array1[j] = temp; // set greater value position to original value
      //};
    //};
  //};
  //return array1;
//};

//console.log(sortGreatest(array1));


//length of array
//var arraylength= array1.length;
//for(i=0; i<array1.length; i++);
//console.log(array1);

// let primeArray = []

// function checkPrime(Number){
//   if(Number > 1){
//     for(let i=2;i<Number;i++){
//       if((Number % i) == 0){
//       }
//     }
//   }

//   console.log(array1)
// }

// // checkPrime(7)

// // Prime number
// for(let i=0; i< array1.length;i++){
//    checkPrime(array1[i])
// }



//display sum of positive number
// let sum=0;
// let number1 = parseInt(prompt(`Enter a number1: `));
// let number2 = parseInt(prompt(`Enter a number2:`));

// if(number1 >=0 && number2>=0){
// sum = number1 + number2
// }
// console.log(`The sum is ${sum}.`);


//multiplication table

// program to generate a multiplication table

// take input from the user
//const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
//for(let i = 1; i <= 10; i++) {

    // multiply i with number
  //  const result = i * number;

    // display the result
    //console.log(`${number} * ${i} = ${result}`);
//}
//simple calculator using switch case:

//const operator = prompt("Enter operator(+ ,- ,* ,/):");

//const number1 =parseFloat(prompt('Enter first number:'));
//const number2 =parseFloat(prompt('enter second number: '));

//switch (operator) {
  // case '+':
     //result = number1 + number2;
     //console.log(`${number1} +${number2} = ${result}`);
     //break;

     //case '-':
      //result = number1 - number2;
      //console.log(`${number1} - {number2} = ${result}`);
      //break;


      //case '*':
     //result = number1 * number2;
     //console.log(`${number1} *${number2} = ${result}`);
     //break;

     //case '/':
     //result = number1 / number2;
     //console.log(`${number1} /${number2} = ${result}`);
     //break;

     //default:
       // console.log(`Invalid operator`);
        //break;
//}



//******

// var x,y,chr;
// for(x=1; x <=6; x++)
// {
//    for (y=1; y < x; y++)
//      {
//     chr=chr+("*");        
//       }
//  console.log(chr);
//  chr='';    
// }

//reverse string

// function reverseString(str){

//   let newString = "";
 
//   for(i=str.length-1; i>=0; i--){
//       newString += str[i];
// }
// return newString;
// }
// const string = prompt('Enter a string:');
// const result = reverseString(string);
// console.log(result);


//splice

function insertElemente(){
  array = [1,4,2,6,56]

  index = 3;

  element = 5;

  array.splice( index, 0, element);
  console.log(array);
}

insertElement();

// program to insert an item at a specific index into an array

// function insertElement() {
//     let array = [1, 2, 3, 4];

//     // index to add to
//     let index = 3;

//     // element that you want to add
//     let element = 8;
  
//     for (let i = array.length; i > index; i--) {

//         //shift the elements that are greater than index
//         array[i] = array[i-1];
//     }

//     // insert element at given index
//     array[index] = element;

//     console.log(array);
// }

// insertElement();