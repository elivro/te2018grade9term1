// Author: FirstName LastName
const READLINE = require("readline-sync");

// global variables
let firstName = 'Orvil';
let lastName = 'Escalante';
let momMaidenName = 'Garibo';
let cityBorn = 'Denton';
let dreamCar = 'Ferrari';
let street = 'Foothill Blvd';
let fantasyName;

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/
// firstName = READLINE.question("What is your first name?");
// lastName = READLINE.question("What is your last name?");
// momMaidenName = READLINE.question("What is your mom's maiden name?");
// cityBorn = READLINE.question("What city were you born in?");
// dreamCar = READLINE.question("What is your dream car?");
// street = READLINE.question("What street did you live on?");

function getNewFirstName(fName,lName) {
  let first3ofFirst = fName.substring(0,3);
  let last2ofLast = lName.substring(0,2);
  return first3ofFirst + last2ofLast;
}
getNewFirstName(firstName,lastName)

/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName(fname,lname) {
  fname.substring(0,2);
  lname.substring(0,3);
  return fname+lname;

}
getNewLastName(momMaidenName, cityBorn)

/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function getTitle(l3reversed,dcar) {

}

/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific() {

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

}

// Run the program!
run();
