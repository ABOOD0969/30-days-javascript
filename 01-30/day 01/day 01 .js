// 25 May 2023 12:04 AM - Damascus - Syria  

// Hello World 
console.log("Hello World!")

// in the terminal -- in the same directory 
// node '.\day 01 .js\'                                     => Hello World!

// Arithmetics

console.log(2 +  3) ; // 5   Addition 
console.log(3 -  2) ; // 1   Subtraction 
console.log(2 *  3) ; // 6   Multiplication
console.log(3 /  2) ; // 1.5 Division 
console.log(3 %  2) ; // 1   Modulus - Remainder 
console.log(3 ** 2) ; // 9   Exponentation  3**2 = 3 * 3  


// Data types 
// In JavaScript there are  ` JavaScript primitive data types : String , Number, Boolean , undefined , Null , and Symbol  .

// Numbers 
// Integers : integer ( negative , zero , positive ) like : -3 , -2 , -1 , 0 , 1 , 2 , 3 
// Float-point numbers : Deciman Number like  -3.0 , -2.5 , -1.1 , 0.0 , 1.0 , 2.0 , 3.5

// Strings  
// collection of one or more characters between two single quotes ' ' , double quotes " " , or backticks ` `

// Booleans 
// a boolean value is either True or False , 

// Undefined 
// in js , if we don't assign a value to a variable , the value is undefined , In addition to that , if a function is not returning anything, it returns undefined

let Value ; 
console.log(Value);         // ==> undefined no value assigned to it 

// Null
// Null in javascript means an empty value 

// Checking Data Types 
console.log(typeof 'Code')    // string
console.log(typeof 5)         // number 
console.log(typeof true)      // boolean 
console.log(typeof null)      // Object type 
console.log(typeof undefined) // undefined


// Variables 
// are used to store data in a memory location , When a variable is declared , a memory location is reserved 
// when a variable is assigned to a value (data) , the memory space will be filled with that data , 
// To declare a variable , we use  ' var , let , or const ' keywords 

// Javascript Valid Variable name 

// a valid javascript variable name must follow the following rules : 
// . a JavaScript variable name should not begin with a number .
// . a JavaScript variable name does not allow special characters except dollar sign "$" and underscore "_" .
// . a JavaScript variable name follows a camelCase Convention.   
// . a JavaScript variable name shouldn't have space between words . 

// The following are examples of valid JavaScript variables . 

// firstName        lastName        country        city  
// capitalCity      age             isMarried      first_name
// num1             num_1           _num_1         $num1
// year2023                                        year_2023


// Camel Case Hump 
// we use camelCaseOneHump with variables   ==>  isMarried      | variable , function 
// we use CamelCaseTwoHump with Class       ==>  IsMarried      | Class 

// variables can also be declaring in one line separated by comma , 
let firstname = "Abdullah" , job = "Coder" , live = "syria" 
console.log(firstname, job , live )


//! Day 1 : Exercises

//? 1. Write a single line comment which says : `comments can make code readable`

//* Solution : 

// comments can make code readable

//? 2. Write another single comment which says, `Welcome to 30DaysOfJavaScript`

//* Solution : 

// Welcome to 30DaysOfJavaScript

//? 3. Write a multiline comment which says , `comments can make code readable, easy to reuse and informative`

//* Solution : 

/**
 comments can make code readable, easy to reuse and informative
 */

//? 4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

//* Solution :  in the variable.js file 

//? 5. Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

//* Solution : in the datatypes.js file 

//? 6. Declare four variables without assigning values

//* Solution : 

let var1 ;
let var2 ;
let var3 ;
let var4 ;


//? 7. Declare four variables with assigned values

//* Solution : 

 var1 = "this is a string" ;
 var2 = true ;
 var3 = 3.1  ;
 var4 = 10   ;


//? 8. Declare variables to store your first name, last name, marital status, country and age in multiple lines

//* Solution : 

const firstName = "Abdullah";
const last_name = "Al-Habal";
const _marital_Status = 1 ; 

//? 9. Declare variables to store your first name, last name, marital status, country and age in a single line

//* Solution : 

//? 10. Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

//* Solution : 

