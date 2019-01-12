

//let userInput = READLINE.question("Type anything and I'll repeat it back!");
//console.log(userInput);


const READLINE = require('readline-sync');

// declare and assign a variable for pennies using readlineSync
// ask the user how many pennies he/she wants change for
let pennies = READLINE.question('Hello! I am the change machine. Please Enter cents as a positive integer ')


  let quarters = Math.floor(pennies/25);

  console.log(quarters,"quarter(s)");
  let remainder = pennies%25

  let dimes = Math.floor(remainder/10)
  console.log(dimes,"dime(s)")
  remainder = remainder%10

  let nickles = Math.floor(remainder/5)
  console.log(nickles,"nickle(s)")

  pennies = Math.floor(remainder/1)
  console.log(pennies,"pennies")
  console.log("I hope you are satisfied. Please come back soon!!");

//console.log(pennies);
// declare, assign, and print how many quarters you can make out of the pennies

//console.log(remainder);


// declare, assign, and print how many dimes you can make out of the pennies


//console.log(remainder);



// declare, assign, and print how many nickels you can make out of the pennies

//remainder = remainder%5




// declare, assign, and print how many pennies are left over









// make a change drawer using an object to
// store all of your change
// each property on the object should represent the particular coin
// use the dot operator on the object to assign how many of each coin you have
// many coins are in the drawer
// print the drawer to see that the values are correct
