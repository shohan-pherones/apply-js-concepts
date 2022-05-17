function isEven(number) {
  if (number % 2 == 0) {
    console.log(number, "is an even number");
  } else {
    console.log(number, "is an odd number");
  }
}

const number = 150;
const result = isEven(number);

function isOdd(num) {
  if (num % 2 != 0) {
    console.log(num, "is an odd number");
  } else {
    console.log(num, "is an even number");
  }
}

const myNumber = 1902;
const myResult = isOdd(myNumber);
