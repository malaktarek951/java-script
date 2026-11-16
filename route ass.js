

// 1. Convert "123" to a number and add 7
console.log(Number("123") + 7); 
// 2. Falsy check
function checkFalsy(value) {
  if (!value) return "Invalid";
  return value;
}
console.log(checkFalsy(0)); 
// 3. for loop, skip even numbers using continue
const odds = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  odds.push(i);
}
console.log(odds.join(", ")); 

// 4. filter even numbers
const evens = (arr) => arr.filter((n) => n % 2 === 0);
console.log(evens([1, 2, 3, 4, 5])); 
// 5. spread operator to merge arrays
const merge = (a, b) => [...a, ...b];
console.log(merge([1, 2, 3], [4, 5, 6])); 

// 6. switch for day of week
function getDay(num) {
  switch (num) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Invalid day";
  }
}
console.log(getDay(2)); 

// 7. map to get string lengths
const lengths = (arr) => arr.map((s) => s.length);
console.log(lengths(["a", "ab", "abc"])); 

// 8. divisible by 3 and 5
function checkDivisible(n) {
  if (n % 3 === 0 && n % 5 === 0) return "Divisible by both";
  return "Not divisible by both";
}
console.log(checkDivisible(15)); 

// 9. arrow function square
const square = (n) => n * n;
console.log(square(5)); 

// 10. destructuring + formatted string
function describe({ name, age }) {
  return `${name} is ${age} years old`;
}
const person = { name: "John", age: 25 };
console.log(describe(person)); 

// 11. multiple parameters sum (rest parameters)
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); 

// 12. promise resolving after 3 seconds
function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 3000);
  });
}
delayedSuccess().then(console.log); 

// 13. largest number in array
function findLargest(arr) {
  let max = arr[0];
  for (const n of arr) {
    if (n > max) max = n;
  }
  return max;
}
console.log(findLargest([1, 3, 7, 2, 4])); 

// 14. object keys
const getKeys = (obj) => Object.keys(obj);
console.log(getKeys({ name: "John", age: 30 })); 
// 15. split string into words
function splitWords(sentence) {
    return sentence.split(" ");
}
console.log(splitWords("The quick brown fox"));
//*********************** */
//forEach() runs a function for every array element, while for...of loops through the elements directly. I use forEach() for simple operations and for...of when I need more control, like using break.
//***************** */
//2. What is Hoisting and what is the Temporal Dead Zone (TDZ)?
//Hoisting means JavaScript processes declarations before executing the code.
//TDZ is the time before a let or const variable is declared, when we cannot access it.
//****************** */
//3. What are the main differences between == and ===?
//== compares values after converting their types if needed, while === compares both value and type without conversion.
//*********
// 4. Explain how try-catch works and why it is important in async operations.
//try-catch is used to handle errors. The try block contains the code, and the catch block handles errors if they happen. It helps prevent the program from stopping unexpectedly, especially when using async/await.
//*************** */
//5. What’s the difference between type conversion and coercion?
//Type conversion happens when we manually change a data type using functions like Number().
//Type coercion happens when JavaScript automatically changes a data type during an operation. */