const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  weapon: "fists",

};

console.log();
console.log("*** Breaking News! The United States has entered an international war! There is little information about how the war started, but we encourage people to stay home and remain calm! I repeat stay home and remain.... ***");
player.name = READLINE.question("What is your name?: ");
console.log("Your friends ask you what are you going to do?");
let stayAlive = READLINE.question("Will you stay home? (yes or no) ");
if(stayAlive == "y" || stayAlive == "yes") {
  player.intellect++;
  player.courage--;
  console.log("We should stay home. I'm sure the milita will come soon and evacuate us to somewhere safe.");
  console.log("Your friends agree to stay home and wait.");
  console.log("The next day has arrive. The Tv is off and your friends are all asleep still. You hear a loud noise coming from outside. ");
  let decisionAfter = READLINE.question("Will you wake up your friends(1) or check out the noise from outside(2?)")
    if (decisionAfter == 1) {
      player.intellect ++;
      console.log("You wake up your friends."+ player.name+ "what do we do?");
      decisionAfter = READLINE.question("Do you walk outside(1) or run away(2)?"
      if (decisionAfter == 1) {
        console.log("You walk outside and see the United States Army. There are 3 tanks and many soldiers going door by door. A military general approaches you.")
        console.log("Look kid, I know war has broken out. You don't have many options here. You can come with us or stay here and die.")
        decisionAfter = READLINE.question("Join the military(1) or stay home(2)?")
          if (decisionAfter == 1){
            player.courage++
            console.log("My boys and I are coming along with you.")
            console.log("Great turns out you have a brain. Take what you have and head over to one of the cargo trucks in behind.")

    }
  if (decisionAfter == 2){
      player.courage ++;
      console.log("You walk outside and see the United States Army. There are 3 tanks and many soldiers going door by door. A military general approaches you.")
      console.log("Look kid, I know war has broken out. You don't have many options here. You can come with us or stay here and die.")
      decisionAfter = READLINE.question("Join the military(1) or stay home(2)?")
    }
      if (decisionAfter == 2) {
        console.log("You walk outside and see the United States Army. There are 3 tanks and many soldiers going door by door. A military general approaches you.")
        console.log("Look kid, I know war has broken out. You don't have many options here. You can come with us or stay here and die.")
        decisionAfter = READLINE.question("Join the military(1) or stay home(2)?")
          if (decisionAfter == 1){
            player.courage++
            console.log("My boys and I are coming along with you.")
            console.log("Great turns out you have a brain. Take what you have and head over to one of the cargo trucks in behind.")
          }
          if (decisionAfter == 2){
            console.log("I won't go join the army.")
            console.log("Well then, I'm sorry.")
            console.log("The army general shoots you and kills all your friends.")
          }

      }
} else if (stayAlive == "n" || stayAlive == "no") {
  player.courage++;
  console.log("oh, I know a secret bunker that was used during world war 2. We could probably hide there for a while. Quick grab everything you can. We're leaving in 5.");
  console.log("Everybody's in the car. You notice that various other people have left as well. You don't notice many cars on the street. You're neighboor sits outside on the his porch. He says the war started yesterday and most people left yesterday. You're lucky you're even alive still. ");
  console.log(player.name+" hurry up we don't have time to waste.");
  console.log("You get in the car, but before you go to the bunker you have a choice... ")
  let decisionAfter = READLINE.question("Will you go to Costco and take what ever tools and food you find(1) or will you go to the gun shop and take what ever weapons you find?");
    if (decisionAfter == 1) {
    player.intellect ++;
    console.log("There is no one at Costco, but you did find food and tools.");
    }
    console.log("You arrive at the bunker")
if (decisionAfter == 2){
    console.log("You tell everyone to wait inside the car. The door to the gun shop is closed. ")
    console.log();
    decisionAfter = READLINE.question("Will you break the door with a brick (1) or will you head back to the car(2)")
    if(decisionAfter == 1){
      player.strength++;
      console.log("You pick up a shotgun, 2 night vision googles, and a semi automatic gun. " );
      player.weapon2 = "shotgun";
      player.item = "night vision googles"
      console.log("you head back to the car and head towards the bunker.")
    }
  }
}
console.log("Thanks for playing!");
