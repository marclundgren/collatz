# Conjecture Conjecture test
Collatz Conjecture: Take a number, any number. If it’s even, halve it. If it’s odd, multiply by 3 and add 1. Repeat. Do all starting numbers lead to 1?


## Test this conjecture in JavaScript
```js
const { abs, round, random, pow }  = Math;

const rando = (offset = 100) =>
  round(random() * pow(2, round(random() * offset)));
const isEven = n => n % 2 === 0;
const isOdd = n => abs(n % 2) == 1;
const halve = n => n / 2;
const multiplyByThreeAndAddOne = n => n * 3 + 1;
  
const collatz = (n = rando()) => {
  let path = [];

  while (n !== 1 || path.length >= Number.MAX_SAFE_INTEGER) {
    path.push(n);
    n = isEven(n) ? halve(n) : multiplyByThreeAndAddOne(n);
  }

  return { n, path };
};

console.log(collatz());
```
