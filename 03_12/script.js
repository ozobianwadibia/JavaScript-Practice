/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Rifle from "./Rifle.js";

const rifleOne = new Rifle(
  "Lara",
  "ARX160",
  "grey",
  1230,
  true,
  3.15,
  36.2,
  11.4
);

const rifleTwo = new Rifle(
  "Hotang",
  "CXT226",
  "black",
  556,
  true,
  2.23,
  12.5,
  6.67
);

console.log("The rifleOne object", rifleOne);
console.log("The rifleOne name is: ", rifleOne.name);
console.log("The rifleOne price is: ", rifleOne.price);
console.log("The old rifleOne dimensions are: ", rifleOne.dimensions);
rifleOne.newDimensions(4.2, 40.5, 12.52);
console.log("The new rifleOne dimensions are: ", rifleOne.dimensions);

console.log("The rifleTwo object", rifleTwo);
console.log("The rifleTwo name is: ", rifleTwo.name);
console.log("The rifleTwo price is: ", rifleTwo.price);
console.log(
  "The old status of rifleTwo is: ",
  rifleTwo.safetyOn,
  " - safety on"
);
rifleTwo.toggleSafety(false);
console.log(
  "The new status of rifleTwo is: ",
  rifleTwo.safetyOn,
  "- safety off"
);
