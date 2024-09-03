/*
2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/

let touristPlace = ["Cox's Bazar", "Kukata", "Bandban"]
console.log(touristPlace);

console.log("================");
touristPlace.push("Sylet");//Add a  new item an array

console.log(touristPlace);

console.log("=====================")

touristPlace.push("Sundornan", "kashmir"); // Add two new item an array

console.log(touristPlace);

touristPlace.pop(); //Remove last item form array

console.log("This is the final array: ",touristPlace);

console.log("=====================")
