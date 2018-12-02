// Define Function
//Function1 prints3
// let print3 = function () {
// console.log(3);
// }
//Call Function
// print3();
//Functions are reusable groups of instructions and are used to do something specific
//Function2 multiplies another number by 3
// //let multiplyBy3 = function(num){
//   let result = num*3;
//   console.log(result);
// }

//multiplyBy3(8);
//uses return instead
//num is a parameter
// let multiplyBy3 = function (num){
//   return num* 3;
// }
// multiplyBy3(8)

// function multiplyBy10 = function (num2) {
//   return num2 *10;


// multiplyBy10(multiplyBy3(8));
//Return stores and console.log prints so you can see it
//function3 multiplies 2 numbers by each other

// let multiply2nums = function (num3,num4){
//   return num3*num4;
// }
// multiply2nums(2,4);
//object, dog
let dog = {};
dog.color ='brown';
dog.numlegs = 4;
dog.breeds = 'golden retriever';
dog.bark = function () {
   return('roof roof!');
}
dog.bark();
console.log(dog['color']);
//when function is on object it is a methods {};
