// what is javascript?

// Javascript improve the user experience of the web page by coverting it form a ststic page into an interactive one.
//  OR
// JavaScript adds behavior to web pages.

/**** Section 3: values and variables in Javascript ****/
// nameing variables: rules ANd best practies

// The first character must be a letter or an undercore(_) or an doller($) You can't use a number as the first character.
// The rest of the variable name can include anyconstter . any number ,or the underscore. Can't use any other characters including space.
// Variable names are case sensitive.
// No limit to the length of the variable name.
// You can't use one of javascript's reserved words as a variable name.

// var myName = 'tanish'
// var myAge = 21;
//  console.log(myAge);

//  Naming Practice
// var _myName = "tanish"
// var 1myName = "tanish"
// var _1my__Name = "tanish"
// var $myName = "tanish"
// var _1myName = "tanish" this is wrong

/**** Section 4 : data type in javascript****/

// data type in javascript

// six data types that are peimitives.

// undefined: typeof instance === "undefined"
// Boolean: typeof instance === "boolean"
// Number: typeof instance === "number"
// String: typeof instance === "string"
// BigInt: typeof instance === "bigint"
// Symbol: typeof instance === "symbol"

// var myName = "t2";
// console.log(myName);

// var myAge = 21;
// console.log(myAge);

// var iAmT2 = true
// console.log(iAmT2)

// typeof operator
// console.log(typeof(iAmT2));

// Datatypes practice

// console.log(10 + "20");
// 9 - "5"
// console.log( 9 - "5");  //Bug
// "Java" + "Script"
// console.log("Java" + "Script");
// " " + " "
// console.log( " " + " ");
// " " + 0
// console.log( " " + "0");
// "tanish" - "thathera"
// console.log( "tanish" - "thathera");
// true + true
// console.log( true + true);
// true + false
// console.log( true + false);
// false + true
// console.log( false + true);
// false - true
// console.log( false - true);

// Interview Question 1
// Difference between null vs undefine?

// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));
// // 2nd javascript bug

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));

//  Interview Question
// What is NaN?

// NaN is a property of the global object.
// In other words, it is a variable in globle scope.
//The initial value of NaN is Not-A-Number

// var myPhoneNumber = 9876543210;
// var myName ="tanish";

// console.log(isNaN(myPhoneNumber));

// console.log(isNaN(myName));

// if (isNaN(myName)) {
//       console.log("plz enter a valid phone number");
// }

// NaN Practice

// NaN === NaN;
// Number.NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(Number.isNaN(NaN));

/**** Section: 5 > Arthmetic operators in javascript ****/

// console.log(5+20);

// Expressions and operator:

// Assignment operators
// Arithmetic operators
// Comparison operators
// Logical operators
// String operators
// Conditional (ternary) operator

// Assignment operators
// An assignment operator assigns a value is its left operand
// based on the value of its right operand.
// The simple assignment operator iws equal (=)

// var x = 5;
// var y = 5;
// // console.log("Is both the x and y are equal " + x == y);
// console.log(`Is both the x and y are equal : ${x == y}`);

// Arithmetic operators
// An arithmrtic operator takes numerical values
// (either literals or variables) as their operandsand
// returns a single numericaL value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remander Operator " + 81%8);

// Increment and Decrement operator
// Operator: x++ or ++x  or x-- or --x
// If used postfix, with operator after operand (for example, x++),
// the increment operator increments and returns the value after incrementing.

// var num = 15 ;
// var newNum = num++ +5;
// console.log(num);
// console.log(newNum);

// var num = 15 ;
// var newNum = num-- +5;
// console.log(num);
// console.log(newNum);

// If used prefix, with operator before operand (for example, ++x),
// the increment operator increments and returns the value after incrementing.

// var num = 15 ;
// var newNum = ++num +5;
// console.log(num);
// console.log(newNum);

// var num = 15 ;
// var newNum = --num +5;
// console.log(num);
// console.log(newNum);

// Prefix increment operator means the variable is incremented first and then
// the expression is evaluated using the new value of the variable.

// Comparison operator
// A comparison operator copares its operands and
// returns a logical value based on whether the comparison is true.

// var a = 30;
// var b  = 10;

// Equal (==)
// console.log(a == b);

// not equal (!=)
// console.log(a != b);

// Greater than (>)
// console.log(a > b);

// Greater then or equal (>=)
// console.log(a >= b);

// less than (<)
// console.log(a < b);

// less than or equal (<=)
// console.log(a <= b);

// Logical operators
// Logical operators are typically used with boolean (Logical) values;
// when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjuction) for a set of
// operands is true if and only if all its operands are true.

// console.log(a > b && b > -0);

// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of
// operands is true if and only if one or more of its operands is true.

// console.log((a < b ) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation)
// takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));
// console.log(!true);

// String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together,
// returning another string that is the union of the two operand strings.

// console.log("Hello world");

// console.log("Hello " + "world");

// var myName = "tanish";

// console.log(myName + " thathera");
// console.log(myName + " kumar");
// console.log(myName + " kumar thathera");

// 4: Challenge time >
// What will be the output, of 3**3?
// What will be the output, when we add a number and a string?
// write a program to swap two numbers?
// write a program to swap two numbers without using third variable?

// sol 1:
// console.log(3**3);
// console.log(10 ** -1);

// sol 2:
// console.log(5 + "thathera");
// console.log(5 - "thathera");

// sol 3:

// var a = 5;
// var b = 10;

// // output b=5; a=10;

// var c = b; //c = 10
// b = a; //b =5;
// a = c;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

// sol 4:

// var a = 5;
// var b = 10;

// // output b=5; a=10;

// a = a + b; // a = 15
// b = a - b; // b = 5;
// a = a - b; //a = 10;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

// Interview question 4
//  What is the Difference between == vs === ?

// Sol
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1 == num2);

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);
// console.log(num1 === num2);

/**** Section 6 :>  Control Statement - 

*if...Else
*Switch Statement
*While Loop
*Do-While Loop
*For Loop
*For in Loop
*For of Loop
*Conditional (ternary) operator
 

* 
 * 1. If ... Else */
// The if statment execute a statement if a specified condition is truthy.
// If rhe condition is falsy, another statement can be executed.

// if raining = raincoat
// else no raincoat

// var tomr = "sunny";

// if (tomr == "rain" ) {
//     console.log("take a raincoat");
// } else {
//     console.log("No need to take a raincoat");
// }

//  Challenge time:>
// Write a program that works out whether if a given year is a leap year or not?
// A normal year  has 365 days, leap years have 365, with an extra day in februsry.

// var year = 2020;
// debugger;
// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         console.log("The year " + year + " is a leap year");
//       } else {
//         console.log("The year " + year + " is not a leap year");
//       }
//     } else {
//         console.log("The year " + year + " is a leap year");
//     }
// } else {
//     console.log("The year " + year + " is not a leap year");
// }

// What is truthy and falsy values in js?

// we haave total 5 falsy values in Js
//  0,"",undefined.null.NaN,false** is false anyway

// if (score = 0) {
//     console.log("OMG, we loss the game");
// } else {
//     console.log("Yay, we won the game")
// }

// 2. Conditional (ternary) operator:>

// The conditional (ternary) operator is the only Js operator
// that takes three operands

// var age = 17
// if (age >= 18) {
//     console.log("You are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }

// var age = 18
// console.log((age >= 18) ? "You can  vote" : "You can't vote");

// 3. Switch Statement:>

// Evaluates an expression, matching the expressions value to a
// case clause, and executes statements associated with that case.

// 1st without break statment
// Find the Area of circle, triangle and rectangle?

// var area = 'circle' ;
// var PI = 3.142, l=5, b=4, r=3;

// if (area == 'circle') {
//     console.log("the area of the circle is : " + PI*r**2);
// } else if(area == 'triangle'){
//     console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == 'rectangle'){
//     console.log("the area of the rectangle is : " + (l*b));
// }else{
//     console.log('please enter valid data');
// }

// var area = 'circle' ;
// var PI = 3.142, l=5, b=4, r=3;

// switch (area) {
//     case 'circle':
//         console.log("the area of the circle is : " + PI*r**2);
//     break;

//     case 'triangle' :
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//     case 'rectangle' :
//         console.log("the area of the rectangle is : " + (l*b));
//         break;

//     default:
//         console.log('please enter valid data');
//     break;

// }

// break
// Terminates the current loop,switch, or label
// statement and transfers
// program control to the statement following the terminated statement.

// 4. While loop Statement:>

// The while ststement creates a loop that executes a specified statement
// as long the test condition evaluates to true.

// var num = 20;
// // block scope
// while(num <= 10){
//     console.log(num); //infinite loop
//     num++;
// }

// 5.Do-While Loop Statement

// var num = 0;

// do{
//     console.log(num); //infinite loop
//     num++;
// }while(num <= 10);

// 6. For Loop

// for(var num = 0; num <= 10; num++){
//     console.log(num);
// }

// challenge time :
// JavaSript program to print table for given number (8,9,12,15) using for?

// output : 8 * 1 = 8 ==> 8 * 10 = 80

// for(var num = 1; num <= 10 ; num++){
//     var tableOf = 8;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);

// }

// for(var num = 1; num <= 10 ; num++){
//     var tableOf = 9;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);

// }

// ************************************************************************************

/**** Sectiion 5:>  Functions in javascript ****/

//  A Javascript function is a block of code designed to perform a particular task.

//  1. Function Definition.

// Before we use a function, we need to define it.

// A function definition (also callrd a function declaration, or function statement)
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas,
//  The JavaScript statements that definr the funvtion, enclosed in curly brackets, { ... }.

// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);

// function sum() {
//     var a = 10, b = 30;
//     var total = a+b;
//     console.log(total);
// }
//

// 2. Calling function .
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).

// function sum() {
//         var a = 10, b = 30;
//         var total = a+b;
//         console.log(total);
//}
// sum();

// 3. Function Parameter vs Function Arguments.
// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.

// function sum(a,b) {
//         var total = a+b;
//         console.log(total);
//     }
// sum();
// sum(30,20);
// sum(50,50);

//  Interview Question

// Why functions?

// You can reuse code: Define the code once, and use ot many times.
// You can use the same code many times with different arguments,
// to produce different results.

//    OR

//  A function is a group of reusable code which can be called amywhere
//  in your program. This eliminates the neeed of writing the same code
//  again and again.

// DRY ==> do not repeat youraelf

//  4. Function expressions.
//  "Function expressions simply means
// create a function and put it into the variable funExp"

// function sum(a,b) {
//         var total = a+b;
//         console.log(total);
//     }

//     var funExp = sum(5,15);

//5. Return Keyword.
// When JavaScript reaches a return statement,
// the function will stop executing.

// functions often compute a return value.
// The return value is "returned" back to the "caller"

// function sum(a,b) {
//    return total = a+b;
// }

// var funExp = sum(15,15);

// console.log('the sum of two number is ' + funExp);

// 6. Anonymous Function

// A Function expression is similar to and has the same syntax
// as a function declaration One can define "named"
// function expressions (where the name of the expression might
// be used in the call stack for example)
// oe "anonymous" function expressions.

// var funExp = function(a,b){
//     return total = a+b;
//  }

// var sum = funExp(15,25);
// var sum1 = funExp(20,25);

//  console.log('the sum of two number is ' + sum+','+sum1);

// **********************************************************************

// Now it's time for JavaScript

// Features of ECMAScript 2015 also known as ES6

// 1. LET VS CONST  vs VAR

// var myName = " tanish";
// console.log(myName);

// myName = "t2";
// console.log(myName);

// let myName = " tanish";
// console.log(myName);

// myName = "t2";
// console.log(myName);

// const myName = " tanish";
// console.log(myName);

// myName = "t2";
// console.log(myName);

// function biodeta(){
//    const myFirstName = "tanish";
//     console.log(myFirstName);

//     if (true) {
//        const myLastName = "thathera";
//         console.log('inner ' + myLastName);
//         console.log('inner ' + myFirstName);
//     }
//     console.log('innerOuter ' + myLastName);
// }

// biodeta();

// var => Function scope
//const and const => Block Scope

//    2. Template literals (Template string)

//  JavaScript program to print table for given number (8)?

//  output : 8 * 1 = 8
//   8 * 2 = 16(8*2)
//   => 8 * 10 = 80

// for(let num = 1; num<= 10; num++){
//     let tableOf = 12;
//     // console.log(tableOf + ' * ' + num + ' = ' + tableOf * num);
//     console.log( ` ${tableOf} * ${num} = ${tableOf * num}` );
// }

// 3. Default Parameters.
// Default function parameters allow named parameters to be
// initialized with default values if no value or undefined is passed.

//   function mult(a,b=2){
//     return a*b;
//   }

//   console.log(mult(5));

//  4. Fat Arror Function

// Normal Way of writing Function

// console.log(sum());

// function sum() {
//    let a = 5; b = 6;
//    let sum = a+b;
//    return `the sum of two number is ${sum} `;
// }

// How to convert in into Fat Arrow Function

// const sum = () => `the sum of two number is ${(a=5)+(b=6)} `;
// console.log(sum());

/***** Section 6 > Arrays in JavaScript  ****/

//  When we use var, we can stored only one value at a time.
// var friend1 = 'ramesh';
// var friend1 = 'suresh';
// var friend1 = 'mukesh';

// var myFriends = ['ramesh',22,male,'suresh',20,male,'mukesh',true, 52];

//  When we feel like storing multiple values in one variable then
//  instead of var, we will use an Array.
//  in JavaScript, we have an Array class,and
//  array are the prototype of this class.

//  example ==>

// var myFriends = ['ramesh',22,male,'suresh',20,male,'mukesh',true, 52];

// 1. Array Subsection 1 => Traversal in array
// navigation through an array

// if we want to get the single data at a time and also
// if we want to change the data

// var myFriends = ['ramesh','suresh','mukesh','ramesh','suresh'];
// console.log(myFriends[myFriends.length - 1]);

// if we want to check the length of elements of an array

// console.log(myFriends.length);

// we use for loop to

// var myFriends = ['ramesh','suresh','mukesh','ramesh','suresh'];

// for(var i=0; i<myFriends.length; i++){
//    console.log(myFriends[i]);
// }

// After ES6 we have for.. in and for.. of loop too

// var myFriends = ['ramesh','suresh','mukesh','ramesh','suresh'];

// for(let elements in myFriends){
//     console.log(elements);
// }

// for(let elements of myFriends){
//     console.log(elements)
// }

// Array.prototype.forEach()
// Calls a function for each element in the array.

// var myFriends = ['ramesh','suresh','mukesh','ramesh','suresh'];

// myFriends.forEach(function(element,index,array){
//     console.log(element + ',' + '  index : ' + index + '   ' + array);
// });

// myFriends.forEach((element,index,array) =>{
//     console.log(element + ',' + '  index : ' + index + '   ' + array);
// });

// 2. Aarry Subsection 2 > Searching and filter in an Array

// Array.proototype.indexoff()

// Returns the first (least) index of an element within the array equal
// to anelemrnt. or -1 if none is found. it search the element from the
// 0th index number

// var myFriendsNames = ['tanish', 'vishal','varun','rohit','vishal'];

// console.log(myFriendsNames.indexOf('vishal', 2));

// Array.prototype.lastIndexof()
// Returns the last (greatest) index of an element within the array equal
// to an element, or -1 if none is found. It search the element last to first

// var myFriendsNames = ['tanish', 'vishal','varun','rohit','vishal'];

// console.log(myFriendsNames.lastIndexOf('vishal',2));

// Array.prototype.includes()
// Determines whether the array contains a value.
// returning true or false as appropriate

// var myFriendsNames = ['tanish', 'vishal','varun','rohit',];

// console.log(myFriendsNames.includes('vishal'));

// Array.prototype.find()

// arr.find(callback(element[, index[, array]])[, thisArg])
// Returns the found element in the array, if some element in the
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,500,600,];

// prices < 400
// const findElem = prices.find((currVal) => currVal < 400);
// console.log(findElem);

// console.log( prices.find((currVal) => currVal > 1400));

// Array.prototype.findIndex()
// Returns the found index in the array, if an element in the
// array satisfies the testing function, or -1 if not found.

// console.log( prices.findIndex((currVal) => currVal > 1400));

// Array.prototype.filter()

// Returns anew array containing all elements of the calling
// array for which the provided filtering function returns true.

// const prices = [200,300,350,400,500,600,];

// // price < 400
// const newPriceTag = prices.filter(( i, index) => {
//     return i > 1400;
// })
// console.log(newPriceTag);

// 3. Array Subsection 3 > How to sort an Array

// Array.prototype.sort()

// The sort() method sorts the elements of an array in place and
// returns the sorted array, The default sort order is ascending, built
// upon converting the elements into strings,
// then comparing their sequences of UTF-16 code units valies.

// const months = ['March', 'Jan', 'Feb', 'April', 'Dec', 'Nov'];

// console.log( months.sort()  );

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log( array1.sort()  );

// 4. Array Subsection 4 > Perform CRUD

// Array.prototype.push()
// The push() method adds one or more elemrnts to the
// end of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// // const count = animals.push('chicken');
// // console.log(count);

// animals.push('chicken', 'cow', 'cats');
// console.log(animals);

// Array.prototype.unshift()
// The unshift() method adds one or more elements to the
// beginning of an array and returns the new length the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// animals.unshift('chicken', 'cow', 'cats');
// console.log(animals);

// 2nd example

// const myNumbers = [1,2,3,5];

//  myNumbers.unshift(4,6);
// console.log(myNumbers);

// Array.prototype.pop()
// The pop() method removes the last element from an array and returns
// that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower','kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// Array.prototype.shift()
// The shift() method removes the first element froman array and returns
// that removed element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower','kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

//  8: challenge time >

// Array.prototype.splice()
// Adds and/or removes elements form an array.

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?

// const months = ['Jan', 'march', 'Aprail', 'June', 'July'];

// sol1:
// const newMonth = months.splice(months.length,0,'Dec');
// console.log(months);

// sol2:
// console.log(newMonth);

// sol3:
// const months = ['Jan', 'march', 'Aprail', 'June', 'July'];

// const indexOfMonth = months.indexOf('march');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,'March');
//     console.log(months);
// }else{
//     console.log('No such data found ! ');
// }

// sol4:
// const months = ['Jan', 'march', 'Aprail', 'June', 'July'];

// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1);
//     console.log(months);
//     console.log(updateMonth);
// }else{
//     console.log('No such data found ! ');
// }

// Infinity wala ex:>

// const months = ['Jan', 'march', 'Aprail', 'June', 'July'];

// const indexOfMonth = months.indexOf('Aprail');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,Infinity);
//     console.log(months);
//     console.log(updateMonth);
// }else{
//     console.log('No such data found ! ');
// }

// 5 Array Subsection 5 > Mape and Reduce Method

// Array.prototype.map()
// let newArray = arr,map(callback(currentValue[, index[, array]]) {
// return element for newArray, after executing somthing
//    }[, thisArg]);

// Returns a new array containing the results of calling a
// function on every element in this array.

// const array1 = [1, 4, 9, 16, 25];
// num > 9

// let newArr = array1.map((currElem,index,arr) => {
//     return currElem> 9;
// })
// console.log(array1);
// console.log(newArr);

// let newArr  = array1.map((currElm, index, arr) => {
//     return `Index no = ${index} and the value is ${currElm} belong to ${arr} `
// })
// console.log(newArr);

// let newArrfor  = array1.forEach((currElm, index, arr) => {
//     return `Index no = ${index} and the value is ${currElm} belong to ${arr} `
// })
// console.log(newArrfor);

// It return new array without mutating the orignal array

// 9: challange Time.

//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those
//     element which are greater than 10?

// soll:
// let arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((curElem) => Math.sqrt(curElem))
// console.log(arrSqr);

// soll 2:
// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr.map((curElm) =>curElm * 2).filter((curElm) => curElm > 10).reduce((accumulator, curElem) => {
//     return accumulator += curElem;
// });
// console.log(arr2);

// we can use the changing too

// > Reduce Method

// flatten an array to  convert the 3d or 2d array into a
// single dimensional array

//  The reduce() method executes a reducer function (that you provide)
// on ach element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// 4 subj = 1subj= 7
// 3subj = [5,6,2]

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem, Index, arr) => {
//        debugger;
//        return accumulator += curElem;
// },7)
// console.log(sum);

// How to fatten an array
// converting 2d and 3d array into one dimensional array

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', ['zone_7',['zone_7', 'zone_8']]]
// ];

// // let flatArr = arr.reduce((accum, currVal) => {
// //     return accum.concat(currVal);
// // })

// console.log(arr.flat(Infinity));

/**** Section 7.> Strings in JavaScript ****/

// AJavaScript strings is zero or more characters written inside quotes.
// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes
// Strings can be created as primitives,
// from string literals,or as objects, using tyhe string() constructor

// let myName = "tanish thathera";
// let myChannelName ="tanish thathera";

// // let ytName = new String("T2");

// console.log(myName);
// console.log(ytName);

//  ..> How to find the length of a string
// String.prototype.length
// Reflects the length of the string.

// let myName = "tanish thathera";
// console.log(myName.length);

// Escape Character

// let anySentence = "we are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// if you dont want to mess, simply use the alternte quotes

// let anySentence = 'we are the so-called "Vikings" from the north.';
// console.log(anySentence);

//  > Finding a String in a String

// String.prototype.IndexOf(searchValue [, fromIndex])

// The indexof() method returns the index of (the position of ) the first
//  occurrence of a specified text in a string

// const myBioData = 'I am the tanish Thathera';
// console.log(myBioData.indexOf("t", 6));

//  // JavaScript counts positions from zero.
//  // 0 is the first position in a string, 1 is the second, 2 is the third .

// // String.prototype.lastIndexOf(searchValue [, fromIndex])
// // Returns the index within the calling String object of the
// // last occurrence of searchValue, or -1 if not found.

// const myBioData = 'I am the tanish Thathera';
// console.log(myBioData.lastIndexOf("t", 6));

//  > Searching for a String in a String

// String.prototype.search(regexp)
// The search() method searches a string for a specified
// value and returns the position of the match

// const myBioData = 'I am the tanish Thathera';
// let sData = myBioData.search("tanish");
// console.log(sData);

// The search() method cannot take a second starr position argument.

//  > Extracting String Parts

// There are 3 methods for e2xtracting a part of a string:

// slice(start, ens)
// substracting(start, end)
// substr(start, length)

// The slice() Method
// slice() extracts a part of a string and returns the extrated part
// in a new string.

// The method takes 2 parameters: the start position,
// and the end position (end not included).

// var str = "Apple, Bananaa, kiwi";

// // let res = str.slice(0,4);
// let res = str.slice(7);
// console.log(res);

// The slice() method selects the element starting at the
// given start argunent, and ends at, but does not include,
// the given end argument.

// Note: The original array will not be changed
// Remember: JavaScript counts positions from zero. First position is 0

//  11: challenge Time..

// Display only 280 characters of a string like the
// one used in Twitter?

// let myTweets = "Lorem Ips  u   m is simply dummy text of the printing a text kjkeideidjeei iejckewoc id irfr e0f qef9rfer9r9fiq0ffi fu5r t5rkfjri 4rufof34uifrfi3r' 4iri49r34ofi349 43rf3409fkoif349 r34r34ifocur48ckr4if f8ujfutq['e'fiwerlafwckefijqwojfonc e3uf3uifc 3uf34 3fjpofeu89r fq3fq394yrfdevffq8fqf what is this ?"

// let myActualTwee = myTweets.slice(0,280);
// console.log(myActualTwee);
// console.log(myActualTwee.length);

// The Substring() Method
// substring() is similar to slice().

// The difference is that substring() cannot accept negative indexes.

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substring(7,-2);
// console.log(res);

// // If we give negative value then the characters are
//  counted from the 0th posssion

// The substr() Method
// substr() is similar to slice().

// The difference is that the second parameter specifies the
// length of the extracted part.

// var str = "Apple, Bananaa, Kiwi";
// // let res = str.substr(7,-2);
// let res = str.substr(-4);
// console.log(res);

// > Replacing String Content()

// String.prototype.replace(searchFor, replaceWith)

// The replace() method replaces a specified value
// with another value in astring.

// let myBioData = 'I am tanish Thathera';
// let replaceData = myBioData.replace('tanish', 'Tanish');
// console.log(replaceData);

// Points to remember
//  1: The replace() method does not chang string
//  it is called on. It returns a new string.
//  2: By default, the replace() method replaces only
//  the first match

// > Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access[]

// The charAt() Method
// The charAt() method returns the character at a
// specified index (position) in a string

// let str = "HELLO WOELD";
// console.log(str.charAt(4));

// The charCodeAt() Method
// The charCodeAt() method returns the unicode of the
// character at a specified index in astring:
// The method returns a UTF-16 code
// (an integer between 0 and 65535).

// The Unicode tandard provides a unique number for every
// character, no matter the platform, device, application,
// or language, UTF-8 is a popular Unicode encoding which
// has 88-bit code units.

// var str = "HELLO WOELD";

// console.log( str.charCodeAt(0));

//   12: challenge Time.

// Return the Unicode of the character in a string

// let str = "HELLO WOELD";
// let lastChar = str.length -1;
// console.log(str.charCodeAt(lastChar));

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// let str = "HELLO WOELD";
// console.log(str[0]);

// >  Other useful methods

// let myName = "tanish thatHera"
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// The concat() method
// concat() joins two more strings

// let fName = "tanish"
// let lName = "thathera"
// console.log(fName + lName);
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));

// String.trim()
// The trim() method remove whitespace from bpth sides of a string

// var str = "       Hello World!         ";
// console.log(str.trim());

// Converting a string to an Array
// A string can be converted to an array with the split() method

// var txt = "a,b,c,d,e";     //String
// console.log(txt.split(","));           //Split on commas
// console.log(txt.split(" "));          //Split on spaces
// console.log(txt.split("|"));         //Split on pipe

/**** Section 8 > Date and Time in JavaScript  ****/

// JavaScript Date oject represent a single moment in time in a
// platform-independent format. Date objects contain a Number
// that represents milliseconds since 1 January 1970 utc.

//  > Creating Data Objects
// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section
// new Date(date string)

// new Date()
// Date objects are crested with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString());   // 9/11/2019, 1:25:01  PM
// console.log(new Date().toString());   //wed sep 11 2019  13:25:01  GMT+0700

// Date.now()
// Returns the numric value corresponding to the current time-the number
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC

// console.log(Date.now());

// new Date(year, month, ...)
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11.

// var d = new Date(2023, 11, 23);
// console.log(d.toLocaleString());

// new Date(dateString)
// new Date(dateString) creates a new date object from a date string

// var d = new Date("October 13, 2023 11:13:00");
// console.log(d.toLocaleString());

// new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time plus milliseconds

// var d = new Date(0);
// var d = new Date(1703331801048);
// var d = new Date(86400000*2);
// console.log(d.toLocaleString());

// Dates Method

// const curDate = new Date();

// // how to get the indivisual date
// console. log(curDate.toLocaleString());
// console. log(curDate.getFullYear());
// console. log(curDate.getMonth());  //0-11 jan to dec
// console. log(curDate.getDate());
// console. log(curDate.getDay());

// // how to set the idivisual date

// console.log(curDate.setFullYear(2024));
// // The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2024, 10, 5));
// console.log(curDate.setMonth(10));  // 0-11 jan to dec
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());

// > Time Methods

// const curTime = new Date();

// how to get the indivisual Time

// console.log(curTime.getTime());
// // // The getTime() method returns the number of milliseconds since jan, 1, 1970
// console.log(curTime.getHours());
// // // The getHours() method returns the hours of a date as a number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// how to set the indivisual Time

// let curTime = new Date();

// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));

// // Practice Time
// new Date().toLocaleTimeString(); // 11:18:48 AM
// //---
// new Date().toLocaleDateString(); // 11/16/2023
// //---
// new Date().toLocaleString(); // 11/16/2023, 11:18:48 AM

//Challenge Time NOT yet decided
// (function(){
//     setInterval(()=> {
//         console.log(new Date().toLocaleTimeString ())
//     }, 1000)
// })();

/**** Section : 9 Math Object in JavaScript ****/

// The JavaScript Math object allows you to perform mathematical tasks on numbers.
// console.log(Math.PI);

// Math.round()
// returns the value of x rounded to its nearest intiger

// let num = 10.2565;
// console.log(Math.round(num));

//Math.pow()
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2**3);

// Math.sqrt()
// Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

// Math.abs();
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4 - 6));

// Math.ceil();
// Math.ceil(x) returns the value of x rounded up to its nearest integers

// console.log(Math.ceil(4.54));
// console.log(Math.round(4.54));
// console.log(Math.ceil(99.1));
// console.log(Math.round(99.1));

// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integers

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.9));

// Math.min()
// Math.min(x) can be use to find the lowest value in a list of argument

// console.log(Math.min(0, 150, 30, 20, -8, -200)); output: -200

// Math.max()
// Math.max(x)  can be use to find the highest value in a list of argument

// console.log(Math.max(0, 150, 30, 20, -8, -200));

// Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1 (inclusive)

// console.log(Math.floor(Math.random()*10));
// console.log(Math.random()*10); //0 to 9

// Math.trunc();
// Math.trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

// Practice Time

// if the argument is a positive number, Math.trunc() is equivalent to
// Math.floor(),
// otherwise Math,trunc() is equivalent to Math.ceil().

// Section 10 > Document Object model in JavaScript

// 1 Window is the main container or we can say the
// global Object and any operations related to entire
// browser window can be a part of window Object.

//For ex > the history or to find the url etc.

// 1. whereas the DOM is the child of Window Object

// 2. All the members like objects, methods or properties.
// If they are the part of window object then we do not refer
// the window object. Since window is the globle object
// so you do not have to write down window.
// - it will be figured out by the runtime.

// For example.
// > window.screen or just screen is a small information
// object about physical screen dimensions.
// > window.location giving the current URL
// > window.document or just document is the main object
//  of the potentially visible (or better yet: rendered)
// document object model/DOM.

// 2. Where in the DOM we need to refer the document,
// if we want to use the document object, methods or properties
// For example.
// > document.getElementById()

// 3. Window has methods, properties and object.
// ex setTimeout() or setInterval() are the methoda
// where as Document is the object of the Window and
// It also have a screen object with properties
// describing the physical display.

// Now, I know you have a doubt like we have seen the methods
// and object of the global object that is window. But What about
// the properties of the windows object

// so example of window object properties are
// innerHight,
// innerWidth and there are many more

// let's see some practical in DOM HTML file

// *************** DOM vs BOM ****************//

// > The DOM is the Document Object Model, which deals with the document,
// the HTML slements themselves, e.g. document and all traversal you
// would do in it, events, etc.

// for Ex:
// change the background color to red
// document.body.style.background = "red";

// > The BOM is the Browser Object Model, which deals with browser components
// aside from the document, like history, location, navigator and screen
// (as well as some others that vary by browser). OR
// In Simple meaning all the window operations which comes under BOM are performed
// using BOM

// let's see more practical on History object

// Functions aleart/confirm/prompt are also a part of BOM:
// they are directly not related to the document,
// but represent pure browser methods of communicating with the user.

// alert(location.href): // shows current URL
// if (confirm("Want to Visit t2? ")) {
//    location.href = "http//www.youtube.com/t2"; //redirect the browser to another URL.
// }

// Section 3: Navigate through the DOM

// 1: document.documentElement
// return the Element that is the root element of the document.
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
// list of the direct children only
// 5: document.childern (without text nodes, only regular Elements)
// 6: document.childNodes.length

// > Practice Time
// How to check whether anelement has child nodes or not?
// we will use hasChildNodes()

// > Practice Time
// How to find the child in DOMtree
// firstChild vs firstElementChild
// lastChild vs lastElementChild
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs
// document.querySelector("child-two").style.color = "yellow";

// > How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling

//SECTION 4:  How to search the elements and the References
//  document.getElementById('heading').innerHTML = "welcome to t2"

// by taking the Reference, heading is the object here
//  const headingchang = document.getElementById('heading');
//  hedingchange.innerHTML = "welcome to t2";

//   console.log( document.getElementsByClassName('para'));

//   console.log( document.getElementsByTagName('p'));

//   console.log( document.getElementsByName('gender'));

// Now the same we have is the query selectors
// querySelector returns the first matching value where as
// querySelectorAll() will return all the elements

//    console.log(document.querySelectorAll('#heading'));

// ****************************************************************************

/**** Section 11 > EVENTSin JavaScript ****/

// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "resct" on these events.

// HTML Events
// An HTML event can be somthing the browser does, or something a user does.

// Hers are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML bitton was clicked
// Often, when events happen, you may want to do somthing.

// JavaScript lets you execute code when events are detcted.

// HTML alllows event handler attributes, with JavaScript code, to be added to HTML elements.

//  SECTION 1. 4 ways of writing Events in JavaScript

//  1: using inline events alert();
//  2: By Calling a function (we already seen and most common wy of writing)
//  3: using Inline events (HTML onclick="" property and element.onclick)
//  4: using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File

// section 2: What is Evenet Object?
// Event object is the parent object of the event object.
// for Example
// MouseEvent, focusEvent, KeyboardEvent etc

// section 3: MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML
// document belonge to the MouseEvent Object

// section 4: KeyboardEvent in JavaScript
// Events that occur when user presses a key on the keyboard,
// belong to the keyboardEvent Objet
// https://www.w3schools.com/jsref/obj_keyboardevent.asp

// Section 5: InputEvents in JavaScript
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the
// checked state has been changed.

// ******************************************************************************************

//  > JavaScript Timing Events

// *************************************************************************************************

// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The tow key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.

//  1: setTimeout()

//  2: clearTimeou ()

//  3: setInterval()

//  4: clearInterval()

// > object oriented JavaScript

// **********************************************************

// 1: What is Object literal?

// Object literal is simply a key:value pair data structure.

// Storing variables and functions together in one container.
// we can refer this as an Objects.

// object = school bag

// How to create an Object?

// 1st way

// let bioData = {
//   myName : 't2',
//   myAge : 22 ,
//   getData : function(){
//     console.log( `My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// bioData.getData();

// 2nd way no need to write functions as wel after es6

// let bioData = {
//   myName : 't2',
//   myAge : 22 ,
//   getData (){
//     console.log( `My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// bioData.getData();

// > What if we want object as a valueinside an object

// let bioData = {
//   myName: {
//     realName: "tanish",
//     height: 5.8,
//   },
//   myAge: 22,
//   getData() {
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   },
// };

// console.log(bioData.myName.realName);

// 2>   What is this Object?

// The definition of "this " object is that contain the current context.
// The this object can have different values depending on where it is placed.

//  // For Example 1
//  // console.log(this);
//  // it refers to the current context and that is window global object

// // ex 2
// function myName(){
//     console.log(this);
// }
// myName();

//  // ex 3

// var myNames = "t2";
// function myName() {
//   console.log(this.myNames);
// }
// myName();

//  // Ex 4S
// const obj = {
//     myAge : 22,
//     myName() {
//       console.log(this.myAge);
//     }
// }
// obj.myName();

// // ex 5
// // this object will not work with arrow function bcz

// const obj = {
//        myAge : 22,
//        myName : () => {
//           console.log(this);
//        }
// }
// obj.myName();

// // ex 6

// let bioData = {
//     myName : {
//         realName : "t2",
//         reelName : "tannu"
//     },
//     // things to remember is that the myName is the object is act like a value
//     myAge : 22,
//     getData (){
//       console.log(`My name is ${this.myName.reelName} and my age is ${this.myAge} `);
//     }
// }
// bioData.getData();

// // call method is used to call the method of another object
// // or with call(), an object can use a method belonging to another object

//  // But as per other it is simply the way to use the this keyword or another object

// 4 Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression
// that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables,

//  => Array Destructuring

// const myBioData = ['tanish', 't2', 22 ];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// let [myFName, myLName, myAge ] = myBioData;
// console.log(myLName);

// we can add values too

// let [myFName, myLName, myAge, myDegree= 'MCS'] = myBioData;
// console.log(myDegree);

// => Object destructuring
// const myBioData = {
//       myFname : "tanish",
//       myLname : "t2",
//       myAge : 22
// }

// // let age = myBioData.age;
// // let myFName = myBioData.myFname;

// let {myFname, myLname, myAge, myDegree= 'MCS'} = myBioData;
// console.log(myFname);

//  5 Object Properties

//  => we can now use Dynamic Properties

//  let myName = "tanish ";
//  const myBio = {
//    [myName ] : " hello how are you?",
//    [20 + 2 ] : "is my age"
//  }
//  console.log(myBio);

// => no need to write key and value, if both are same

//   let myName = "tanish thathera";
//   let myAge = 22;

//   const myBio = {myName, myAge}
// console.log(myBio);

//  6 Spread Operator

// const colors =['red','green', 'blue','white','pink'];

// const myColors = ['red','green', 'blue','white','pink','yellow', 'black'];
// // // 2nd time add more color on top and tell we need to write it again
// // // on myColor array too

// const MyFavColors = [ ...colors,'yellow', 'black'];

// console.log(MyFavColors);

// EA7 features

// // 1: array include
// const colors = ['red','green', 'blue','white','pink','yellow', 'black'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

// 2: **
// console.log(2**3);

// ES 8 Features

// String padding
// Object.values()
// Object.entries()

// const message = "my name is t2";
// console.log(message);
// console.log(message.padStart(10));
// console.log(message.padEnd(10));

// const person = { name: 'fred', age: 22};
// // console.log(Object.values(person));
// // console.log(Object.entries(person));
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));

// ES 2018

// const person = { name: 'fred', age: 22};
// const sPerson = { ...person};

// console.log(person);
// console.log(sPerson);

// ES 2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()

// ES 2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER
// // console.log(oldNum);
// // console.log(9007199254741016n + 25n);
// const newNum = (9007199254741016n + 25n);
// console.log(newNum);
// console.log(typeof newNum);

// const foo = null ?? 'default string';
// console.log(foo);

// ES 2014

//  "use strict";
// x = 3.14;
// console.log(x);

// // ***********************************************************************************

// // > How JavaScript Works? Advanced and Asynchronous JavaScript

// // *******************************************************************************************

// // Advanced JavaScript Section

// // 1: Event Propagation (Event Bubbling and Event Capturing)

// // check html file

// // 2: Higher Order Function
// // function which takes another function as an arguments is called HOF
// // wo function jo dusre function ko as an argument accept karta hai use HOF kehte hai..

// // 3:Callback Function
// // function which get passed as an argument to  another function is called CBF
// // A callback function is a function that is passed as an argument to
// // another function, to be "called back" at a later time.
// // jis bhi function ko ham kisi or function ke under as an argument passed
// // karte hai then usko hum callback fun.. bolte hai

// // we need to create a calculator

// const add = (a,b) => {
//     return a+b ;
// }
// // console.log(add(5,2));

// const subs = (a,b) => {
//   return Math.abs(a-b);
// }
// const mult = (a,b) => {
//   return a*b;
// }

// const calculator = (num1,num2,operator) => {
//   return operator(num1,num2);
// }

// console.log(calculator(5,9,subs));

// // // Ihave to do the hardcoded for each operation which is bad
// // // we will use the callback and the HOF to make it simple to use

// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// // In the above example, calculator is the higher-order-function.
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Ordr Function because it takes
// // another function aas an argument

// // and add, sub and mult are called the callback function bcz they  are passed
// // as an argument to another argument.

// // Interview   Question
// // Difference between Higher Order Function and Callback function ?

// // > Asynchronous JavaScript

// //  6:    Synchronous JavaScript Prog

// 1work = 10min
// 2work = 5sec

// const fun2 = () => {
//   console.log(`Function 2 is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again`);
//  }

//  fun1();

// // Asynchronous JavaScript Prog

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2 is called`);
//   }, 2000);
// }

// const fun1 = () => {
//    console.log(`Function 1 is called`);
//    fun2();
//    console.log(`Function 1 is called Again`);
// }

// fun1();

// // What is Event Loop in JavaScript?
// // ppt Explain

// // 5 :  Hoisting in JavaScript

// // we have a creation phase and execution phase.

// // Hoisting in JavaScript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.

// // For Example
// console.log(myName);
// var myName;
// myName = 'tanish';

// // How it will be output during creation phase

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = 'tanish';

// //  In ES2015 (a,k,a, ES6), hoisting is avoied by using the let keyword
// // instead of var. (The other difference is that variables declared
// // with let are local to the surrounding block, not the entire function,)

// // 6 What is Scope chain and Lexical Scoping in JavaScript?

// // The scope chain is used to resolve the value of variable names in JS.

// // scope chain in js is lexically defined, which means that we can see
// // what the scope chain will be by looking at the code.

// // At the top, we have the Global Scope, which is the window Object in the browser.

// // Lexical Scoping means Now, the inner function can get access to
// // their  parent functions variables But vice-versa is not true.

// // For Example..

// let a = "Hello guys. "; // global scope

// const first = () => {
//   let b = " How are you?"

//   const second = () => {
//     let c = " Hii, I am fine thank you";
//    console. log(a+b+c);
//     }
//     second();
//    //console.log(a+b+c); //I can't use C
//  }

// first();

// // 7 What is Closurs in JavaScript

// // A closure is the conbination of a function bundled together (enclosed) with references
// // to its surrounding state (the lexical environment).

// // In other words, a closure gives you
// // access to an outer function's scope from an inner function.

// // in JavaScript, closures are created every time a function is created, at function creation time.

// // For Example

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two num is ${sum}`);
//   }
//   innerFun();
// }
// outerFun(5);

// // it same like lexical scoping

// // One more Example

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two num is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClosure = outerFun(5);
// console.dir(checkClosure);

// "use strict"

// let x = "tanish";
// console.log(x);

// //  Back To Advanced JavaScript

// Currying

// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);

// sum(5)(3)(8)

// //  8 : CallBack Hell

//  setTimeout(()=>{
//      console.log(`1 works is done`);
//      setTimeout(()=> {
//         console.log(`2 works is done`);
//         setTimeout(()=> {
//           console.log(`3 works is done`);
//           setTimeout(()=> {
//             console.log(`4 works is done`);
//             setTimeout(()=> {
//               console.log(`5 works is done`);
//               setTimeout(()=> {
//                 console.log(`6 works is done`);
//               }, 1000)
//             }, 1000)
//           }, 1000)
//         }, 1000)
//      }, 1000)
//   }, 1000)

// // **********************************************************************

// // 👉 // 🤩 Bonus JSON 🤩

// // **********************************************************************

// // 👉 JSON.stringify turns a JavaScript object into JSON text and
// stores that JSON text in a string, eg:

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object);
// // // "{"key_1":"some text","key_2":true,"key_3":5}"

// console.log(object_as_string);

// typeof(object_as_string);
// "string"

// // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

// var object_as_string_as_object = JSON.parse(object_as_string);
// // // {key_1: "some text", key_2: true, key_3: 5}

// typeof(object_as_string_as_object);
// // "object"

// // 7️⃣ AJAX Call using XMLHttprequest

// // how to handled with the events and callback

// // XMLHttpRequest (XHR) objects are used to interact with servers.
// // You can retrieve data from a URL without having to do a full
// // page refresh. This enables a Web page to update just part
// // of a page without disrupting what the user is doing.
// // XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();
// // we need to call the api or request the api using GET method ki, me jo
// // url pass kar kr rha hu uska data chaiye
// request.open('GET', "https://covid-api.mmediagroup.fr/v1");
// request.send(); // we need to send the request and its async so we need to
// // add the event to load the data adn get it

// // to get the response
// request.addEventListener("load", () => {
//     console.log(this.responseText);
// });























//pattern :-

// let pattern = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 3; j++) {
//     pattern += j + "" + i + "";
//   }
//   pattern += "\n";
// }
// console.log(pattern);
