/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const rifle = {
  name: "Lara",
  type: "ARX160",
  color: "black",
  price: "1230 dollars",
  safetyOn: true,
  toggleSafety: function (safetyCondition) {
    this.safetyOn = safetyCondition;
  },
  dimensions: {
    widthInInches: 3.15,
    lengthInInches: 36.2,
    heightInInches: 11.4,
  },

  newDimensions: function (newWidth, newLength, newHeight) {
    this.dimensions.widthInInches = newWidth;
    this.dimensions.lengthInInches = newLength;
    this.dimensions.heightInInches = newHeight;
  },
};

console.log("The rifle object:", rifle);
console.log("The rifle type is:", rifle.type);
console.log("The rifle width is: ", rifle.dimensions["widthInInches"]);
console.log("Rifle dimensions", rifle.dimensions);
