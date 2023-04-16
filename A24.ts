let str1 = "hello";
let  str2 = "hello";
console.log(str1 === str2); // true
str1 = "hello";
str2 = "world";
console.log(str1 !== str2); // true
str1 = "hello";
str2 = "Hello";
console.log(str1 === str2); // false
str1 = "hello";
str2 = "hElLo";
console.log(str1 !== str2); // true

let  str = "HELLO";
console.log(str.toLowerCase() === "hello"); // true
str = "Hello";
console.log(str.toLowerCase() === "hello"); // true
str = "hello";
console.log(str.toLowerCase() === "hELLO"); // false

let num1 = 5;
let num2 = 5;
console.log(num1 === num2); // true
num1 = 10;
num2 = 5;
console.log(num1 !== num2); // true
num1 = 10;
num2 = 5;
console.log(num1 > num2); // true
num1 = 5;
num2 = 10;
console.log(num1 < num2); // true
num1 = 10;
num2 = 5;
console.log(num1 >= num2); // true
num1 = 5;
num2 = 10;
console.log(num1 > num2 || num1 === num2); // false

let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true
arr = [1, 2, 3, 4, 5];
console.log(arr.includes(6)); // false
arr = [1, 2, 3, 4, 5];
console.log(!arr.includes(6)); // true
arr = [1, 2, 3, 4, 5];
console.log(!arr.includes(3)); // false


