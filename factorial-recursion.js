// n! = n * (n-1)!
// 7! = 7 * (7-1)!

function factorialRecursive(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

const myFactorial = factorialRecursive(7);
console.log(myFactorial);
