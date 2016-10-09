// temperature.js

var temp = 86;
var precipitation = true;
var indoors = false;

console.log("The temperature is ",temp," degrees.")

if (indoors == true) {
	console.log("Time to swim")
} else if (precipitation === false && temp >80) {
	console.log("Time to swim.")
}