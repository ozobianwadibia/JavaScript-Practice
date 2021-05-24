/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let myArray = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

console.log(myArray);
// delete last item
myArray.pop("Neptune");
console.log(myArray);
// make 'Neptune' first item
myArray.unshift("Neptune");
console.log(myArray);
// sort all the items in the array
myArray.sort();
console.log("Old array: ", myArray);
// find 'Jupiter'
const findIt = myArray.find((planet) => planet == "Jupiter");
console.log(findIt);
console.log();

// new array to hold remaining items
let newArray = [];
// delete method
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] != "Jupiter") {
    newArray.push(myArray[i]);
  }
}

console.log("New array is: ", newArray);
