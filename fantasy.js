// Author: FirstName LastName
const READLINE = require("readline-sync");

// global variables
let firstName  = READLINE.question("What is your first name?");
let lastName = READLINE.question("What is your last name?");
let momMaidenName = READLINE.question("What is your mom's maiden name?");
let cityBorn = READLINE.question("What city were you born in?");
let dreamCar = READLINE.question("What is your dream car?");
let street = READLINE.question("What is the name of the street you live in?");
let fantasyName;

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/


function getNewFirstName(fName,lName) {
  let first3ofFirst = fName.substring(0,3);
  let last2ofLast = lName.substring(0,2);
  console.log( first3ofFirst + last2ofLast);
}
;

/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName(fname,lname) {
let newLast2 = fname.substring(0,2);
let newlast3 = lname.substring(0,3);
  console.log(newLast2+newlast3);

}


/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function getTitle(l3reversed,dcar) {
  let new1title = l3reversed.length;
  let new3title = l3reversed.slice(-3);

  console.log( new3title.charAt(2) + new3title.charAt(1) + new3title.charAt(0) + dreamCar );

}

/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific() {
    console.log("of " + street);
}

/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions, each setting one of the global variables
  to what the user typed in. It should then call the functions above to produce
  the user's fantasy name (set fantasyName to that), and display it for the user
  to see.
*******************************************************************************/

function run() {
  console.log(  "Generating new name.................................Loading ........" +
                  " your new name is ")



    fantasyName = getNewFirstName(firstName,lastName), getNewLastName(momMaidenName, cityBorn),  getTitle(lastName, dreamCar), getHonorific();
    console.log( fantasyName);
}

// Run the program!
run();
console.log("")
