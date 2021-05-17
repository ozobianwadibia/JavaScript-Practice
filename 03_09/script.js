/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,

  changeName: function (newName) {
    this.name = newName;
  },
  adjustVolume: function (newVolume) {
    this.volume = newVolume;
  },
  alterColor: function (newColor) {
    this.color = newColor;
  },
  redoPocketNum: function (newPocketNum) {
    this.pocketNum = newPocketNum;
  },

  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The old backpack color is: ", backpack.color);
backpack.alterColor("blue");
console.log("The new backpack color is: ", backpack.color);

console.log("The old backpack name is: ", backpack.name);
backpack.changeName("Rising Thunder");
console.log("The new backpack name is: ", backpack.name);
