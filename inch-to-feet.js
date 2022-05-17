function inchToFeet(inches) {
  const feets = inches / 12;
  return feets;
}

let myInches = 132;
let myFeets = inchToFeet(myInches);
console.log(myFeets);

let dadiInches = 144;
let dadiFeets = inchToFeet(dadiInches);
console.log(dadiFeets);

//mile to kilometers
function mileToKilometer(miles) {
  const km = miles * 1.60934;
  return km;
}

var marathon = mileToKilometer(26.2);
console.log(marathon);
