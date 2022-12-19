// let year=Number(prompt('write a year you like'))
// console.log(year);

// function checkYear(year) {
//     if (year > 2000) {
//       const message = "You are in the 21st century.";
//       return message;
//     } else {
//       const message = "You live in the Middle Age";
//       return message;
//     }
  
    
//   }
  
//   console.log(checkYear());


//   reverse each word in a given String
//   For example:
//   Given this 'word in a given String'
//   result 'drow ni a nevig gnirtS'



// let a = 4;
// console.log(12 + ++a);
// console.log(12 + a++);
// console.log(a);
​
//let b = 3, d = b, u = b;
​
// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ +
//  u
​
// console.log(tree); // 163
​
// 4 * 4*3 * 3 +
// 3 + 4 +
// 3 * 3 +
// 3
​
​
//
// let x = 'Yes';
//
// function y(){
//   let x = 7;
//   console.log(x);
// }
// function getX() {
//   let x = 'No';
//   console.log('in getX => ',x);
// }
// getX()
// console.log('out => ', x);
// {
//   let y = 0;
// }
// let y = 8;
​
// for(var i = 0; i < 5; i++){
​
// }
// console.log(i);
​
// let x = 3;
​
// function functionName() {
//   var x = 5;
//   console.log(x);
//   var x = 6;
//   console.log(x);
// }
// functionName()
// console.log(x);
​
// function x(a = 1,b = 5) {
//   return a + b
// }
// let y = x();
// console.log(y);
​
// ternary operator
// let a = 10;
// let b = 7;
// let c;
// if(a > b){
//   c = 6;
// }
// else {
//   c = 0;
// }
// console.log(c);
​
// condition ? ... : ...
// let c = (a > b) ? 8 : 0;
// console.log(c);
​
// function getName(name){
//   return name;
// }
// let a = true;
// let b = 'yes'
// let firstName = (!a) ? getName('John') : (b === 'yes') ? 'Zivuch' : 'no name';
// console.log(firstName);
​
// let x;
// x = 8;
// console.log(x);
// const NAME_TEMPLATE = 90;
// Y = 9;
// console.log(NAME_TEMPLATE);
​
​
// template strings
​
// let name = 'Mary';
// console.log('Hello' + ' ' + name + ',\n welcome to my home');
//
// console.log(`Hello ${name},
//   welcome to my home`);
​
​
// Exercise reverse
// reverse each word in a given String
// For example:
// Given this 'word in a given String'
// result 'drow ni a nevig gnirtS'
// Do not use Array method
// function reversWord(str) {
//   let ret = '';
//   // word
//   for (let i = str.length-1; i >= 0; i--) {
//     ret = ret + str[i]
//   }
//   return ret;
// }
// // console.log(reversWord('length'))
//
// function reverseAll(str) {
//   let arr = str.split(' ');
//   // console.log(arr);
//   let arr2 = []
//   for(let i = 0; i < arr.length; i++) {
//     arr2.push(reversWord(arr[i]));
//   }
//   return arr2.join(' ');
// }
// console.log( reverseAll('word in a given String') )
​
​
// x('Jonn')
​
// function x(name) {
//   console.log(`My name is ${name}`);
// }
​
// const get_x = function(name) {
//   console.log(`My name is ${name}`);
// }
// x('Mary');
// // console.log(x);
// // let x = 8;
//
// const a = (a,b,c) => {
//   console.log('hello a');
// }
//
// const checkIfStringIsNull = (str) => {
//
// }
​
​
// Array method
// forEach
// some
// every
// let arr = ['a','b','c','d']
// for(let i = 0; i < arr.length; i++){
//   // console.log(i, arr[i]);
// }
// for(x of arr) {
//   console.log(x);
// }
// let obj = {
//   name:'John',
//   age:25,
//   status:'single'
// }
// for(x in obj){
//   console.log(x, obj[x]);
// }
​
// let arr = ['a','b','c','d'];
// arr.forEach( (item,i, ret) => {
//     ret[i] = arr[0]+'@'
// })
// console.log(arr);
​
​
// some
// let arr = [2,2,2,2,2];
// let even = arr.some( item => {
//   return item === 10;
// })
// console.log(even);
​
// let even = arr.every( item => {
//   return item%2 === 0;
// })
// console.log(even);






