/*
Collatz Conjecture:

Take a number, any number.
  If it’s even, halve it.
  If it’s odd, multiply by 3 and add 1.
  Repeat.
  
  Do all starting numbers lead to 1?
*/

const ONE = 1;
const TWO = 2;
const THREE = 3;

const isEven = n => n % 2 === 0;
const isOdd = n => Math.abs(n % 2) == 1;
const halve = n => n / TWO;
const multiplyByThreeAndAddOne = n => n * THREE + ONE;

const rando = (offset = 100) =>
  Math.round(Math.random() * Math.pow(2, Math.round(Math.random() * offset)));

const MAX_INDEX = Number.MAX_SAFE_INTEGER; // just in case

const collatz = (n = rando()) => {
  let path = [];

  while (n !== ONE || path.length >= MAX_INDEX) {
    path.push(n);
    n = isEven(n) ? halve(n) : multiplyByThreeAndAddOne(n);
  }

  return path;
};

let result;
try {
  result = collatz();

  console.log(`✅ ${n} did in fact lead to $ONE.`, result);
} catch(err) {
  console.error(err);
}
