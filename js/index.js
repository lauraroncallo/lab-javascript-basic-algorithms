// Iteration 1: Names and Input
const hacker1 = "Laura"
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Gonzalo"
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length> hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}


// Iteration 3: Loops
let nameCapitals = " "
for (i=0; i<hacker1.length; i++){
    nameCapitals += `${hacker1[i]} `;
}
console.log(nameCapitals);

let nameReverse= " ";
for (let i=hacker2.length -1; i>=0; i--){
    nameReverse = nameReverse + hacker2[i];}
    console.log(nameReverse);

if (hacker2< hacker1){
    console.log("Yo, the navigator goes first definitely.");
} else if(hacker1< hacker2){
    console.log("The driver's name goes first.");
} else{ 
    console.log("What?! You both have the same name?");
}