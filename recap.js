// variables
var time = "10:15pm";
var bookPrice = 150;
var isWhiteColor = false;

// array
var partners = ["shazid", "mazid", "meherin"];
var elementCount = partners.length;
var meherinPosition = partners.indexOf("meherin");
partners.push("kazid");
partners.pop();

// conditionals
if (bookPrice < 120) {
  console.log("I will buy this book");
} else {
  console.log("Discount me please!");
}

// loops
var i = 0;
while (i <= 15) {
  console.log(i);
  i++;
}

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

// function
function isMoonUp() {
  if (time >= 19 && time <= 5) {
    return true;
  }
  return false;
}

var moonStatus = isMoonUp(21);

// let const
// value of variable could change
let pcPrice = 50000;
pcPrice = 52000;

// value of variable will not change
const name = "samantha";
