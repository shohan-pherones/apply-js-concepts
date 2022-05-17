function getFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

let myNumber = 6;
let result = getFactorial(myNumber);
console.log(result);
