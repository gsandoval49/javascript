/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const guitar = {
  name: "Ibanez",
  color: "black",
  stringsNum: 6,
  picksNum: {
    soft: 3,
    medium: 3,
    hard: 4,
  },
  stringType: "carbon",
  strapLength: 40,
  guitarCase: true,
  toggleGuitarCase: function (caseStatus) {
    this.guitarCase = caseStatus;
  },
  newPicksNum: function (soft, medium, hard) {
    this.picksNum.soft = soft;
    this.picksNum.medium = medium;
    this.picksNum.hard = hard;
  },
};

console.log("The guitar object:", guitar);
console.log("The number of soft picks you have:", guitar.picksNum.soft);
console.log("The number of medium picks you have:", guitar.picksNum.medium);
console.log("The number of hard picks you have:", guitar.picksNum.hard);

var query = "strapLength";

console.log("The strapLength value:", guitar[query]);
