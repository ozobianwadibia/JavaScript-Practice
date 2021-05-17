class Rifle {
  constructor(
    // define parameters
    name,
    type,
    color,
    price,
    safetyOn,
    widthInInches,
    lengthInInches,
    heightInches
  ) {
    // define properties
    this.name = name;
    this.type = type;
    this.color = color;
    this.price = price;
    this.safetyOn = safetyOn;
    this.dimensions = {
      width: widthInInches,
      length: lengthInInches,
      height: heightInches,
    };
  }
  // additional methods
  toggleSafety(safetyCondition) {
    this.safetyOn = safetyCondition;
  }
  newDimensions(newWidth, newLength, newHeight) {
    this.dimensions.width = newWidth;
    this.dimensions.length = newLength;
    this.dimensions.height = newHeight;
  }
}

export default Rifle;
