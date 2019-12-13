# Conjecture Conjecture test
Collatz Conjecture: Take a number, any number. If it’s even, halve it. If it’s odd, multiply by 3 and add 1. Repeat. Do all starting numbers lead to 1?


## Test this conjecture in JavaScript
```js
const rando = (offset = 100) =>
  Math.round(Math.random() * Math.pow(2, Math.round(Math.random() * offset)));
  
const collatz = (n = rando()) => {
  let path = [];

  while (n !== ONE || path.length >= MAX_INDEX) {
    path.push(n);
    n = isEven(n) ? halve(n) : multiplyByThreeAndAddOne(n);
  }

  return path;
};

console.log(collatz());
```
