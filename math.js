// Variables
let num1 = 5;
let num2 = 10;
// the sum of num1 and num2 into a variables
//let sum1 = num1 + num2
//console.log(num2);
// difference of num1 and num2
//console.log(difference);
// save product of num1 and num2
//console.log(product);
//save the power of num1 and num2 into a variable
//console.log(power);
//save the quotient of num1 and num2 into a variables
//let quotient = num1/num2;



// **** Problem 1 ****
// Store the sum of num1 and num2 in a variable.
// Print the sum.
let sum = num1 + num2;
console.log(sum,"sum");

// **** Problem 2 ****
// Store the difference between sum (above) and 7 in a variable.
// Print the difference.
let difference1 = sum - 7;
console.log(difference1,"difference");
// **** Problem 3 ****
// Store the product of difference and 3 in a variable.
// Print the product.
let product1 = difference1 * 3;
console.log(product1,"product");

// **** Problem 4 ****
// Store the power of the product raised to an exponent of 2 in a variable.
// Print the power.
let power1 = product1 ** 2;
console.log(power1,"power");
// **** Problem 5 ****
// Store the quotient of the power divided by 4 in a variable.
// Print the quotient.
let quotient1 = power1/4;
console.log(quotient1,"quotient");

// **** Problem 6 ****
// Store the remainder of the quotient divided by 2 in a variable.
// Print the remainder.
let remainder1 = quotient1 % 2
console.log(remainder1,"remainder");

// **** Problem 7 ****
// Print a boolean value (true/false) representing if the quotient from
// problem 5 is even or odd. If the quotient is even, print true. If the
// quotient is odd, print false.
 let isEven = remainder1 == 0;
 let isOdd = remainder1 == 1;
 console.log(isEven,"Even");
 console.log(isOdd,"Odd");
// Hint: You can tell if a value is even or odd if it is divisible by 2;
// in other words, if there is no remainder after dividing the value by
// 2, then the value is even. See problem 6!
