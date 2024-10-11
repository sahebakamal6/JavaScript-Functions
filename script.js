
//===========JavaScript Assignment 03==================

//Odd or Even Checker:
//Ques: Write a program that checks if a given number is odd or even using an if-else statement.

var numchecker = prompt('Enter Number:')
if (numchecker % 2 === 0){
    alert(`${numchecker} is an even number.`)
}else if(numchecker % 2 != 0){
    alert(`${numchecker} is an odd number.`)
}else{
    alert('you did not enter any number')
}

//Grade Calculator:
//Ques: Create a program that takes a score as input and assigns a grade (A, B, C, D, or F) based on the score using if-else if conditions.

var gradeCheck = prompt('Enter your marks:')
if (gradeCheck >= 90){
    alert('You got A+')
}else if(gradeCheck >= 75){
    alert('You got A Grade')
}else if(gradeCheck >= 60){
    alert('You got B Grade')
}else if(gradeCheck >= 50){
    alert('You got C Grade')
}else{
    alert('Failed')
}

//Leap Year Checker:
//Ques: Write a function to determine if a given year is a leap year or not. Use if-else logic to handle the different conditions for leap years.

var leapYear = +prompt('Enter Year:')

if (leapYear) {

if (leapYear % 400 === 0){
    alert(`${leapYear} is a leap year`)
}
else if (leapYear % 100 === 0){
    alert(`${leapYear} is not a leap year`)
}
else if (leapYear % 4 === 0){
    alert(`${leapYear} is a leap year`)
}
else {
     alert(`${leapYear} is not a leap year`)
}
}else{
    alert('You did not enter any year')
}

//Number Comparison:
//Ques: Create a program that takes three numbers as input and prints the largest number using if-else if statements.

var numcompchec1 = prompt('Enter any three numbers:')
var numcompchec2 = prompt('Enter any three numbers:')
var numcompchec3 = prompt('Enter any three numbers:')
if (numcompchec1 > numcompchec2 && numcompchec1 >numcompchec3){
    alert(`${numcompchec1} is the largest number`)
}else if(numcompchec2 > numcompchec1 && numcompchec2>numcompchec3){
    alert(`${numcompchec2} is the largest number`)
}else if(numcompchec3>numcompchec1 && numcompchec3>numcompchec2){
    alert(`${numcompchec3} is the largest number`)
}else if( numcompchec1 && numcompchec2 === numcompchec3){
    alert('they all are equal')
}else('number invalid')


//Discount Calculator:
//Ques: Write a program that calculates the final price of an item based on the original price and a discount rate. Apply different discount rates based on the amount (e.g., no discount if less than $50, 10% if between $50-$100, and 20% if greater than $100).

var price = +prompt('enter price:')
var discountRate = null

if (price < 50){
    discountRate = 0
}else if(price >= 50 && price < 100){
    discountRate = 10
}else if (price >= 100){
    discountRate = 30
}

var discount = (price * discountRate)/100

var finalPrice = price - discount

alert(`discount applied ${discountRate} and the final price is ${finalPrice.toFixed(2)}`)

//=======CHAPTER : FUNCTIONS
//Sum of Two Numbers:
//Ques: Write a function that takes two numbers as arguments and returns their sum.

function myFunction(num1,num2){
    return num1 + num2
}
console.log(myFunction(3,5))

//Convert Celsius to Fahrenheit:
//Ques: Create a function that converts a temperature from Celsius to Fahrenheit using the formula F = C * 9/5 + 32.

function temperature(){
  var Celsius = +prompt('Enter temperature:')
  var Fahrenheit = Celsius * 9/5 + 32
  return Fahrenheit
}
console.log("The temperature is",temperature(),"Fahrenheit Now")

//Check for Prime Number:
//Ques: Write a function that takes a number as input and returns true if the number is prime, and false otherwise.

function prime() {

    if (num <= 1) {
        return false;
    }

    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }

    }

    return true

}

var num = prompt('Enter Number:')
if (prime(num)) {
    alert(`${num} is a prime number`)
} else {
    alert(`${num} is not a prime number`)
}

prime();

//Reverse a String:
//Ques: Create a function that takes a string as input and returns the string reversed.

function reVerse(string){
    var string = prompt('Enter any word:')
    return string.split('').reverse().join('');
}

var revstring = reVerse();


console.log(revstring)

//Factorial of a Number:
//Ques: Write a function that calculates the factorial of a given number (e.g., factorial(5) should return 120).

function factors(fac){
    var factor = []

    for(var i = 1; i <= fac; i++){
        if(fac % i === 0){
            factor.push(i);
        }
    }
     return factor
}

var findFactor = prompt('Enter number to find factor:')
var factor = factors(findFactor)
console.log(`The factor of ${findFactor}: ${factor}`)  

//Greet User (No Parameters):
//Ques: Write a function that prints a generic greeting message like "Hello, welcome!" without taking any parameters.

function greet(){
    console.log('Hello, Welcome')
}
greet()

//Greet by Name (With Parameter):
//Ques: Create a function that takes a name as a parameter and prints a personalized greeting, e.g., "Hello, [name]!".

function greetName (name){
    console.log(`Hello ${name}`)
}
greetName('Saheba')

//Sum of Two Numbers (With Parameters):
//Ques: Write a function that accepts two numbers as parameters and returns their sum.

function sumOfNumber(a,b){
    console.log(a + b)
}
sumOfNumber(3,4)

//Random Number Generator (No Parameters):
//Ques: Create a function that generates and returns a random number between 0 and 100. This function does not require any parameters.

function randomNumber(){
    return Math.floor(Math.random()*101)
}
console.log(randomNumber())

//Check Age for Voting (With Parameter):
//Ques: Write a function that takes age as a parameter and checks if the person is eligible to vote (18 years or older). It should return true or false.

function vote(age){
    var age = prompt(`Enter Your Age:`)
    var condition = false
    if(age >= 18){
        condition = true
        console.log(`You are eligible for voting`)
    }else{
        condition = false
        console.log(`You are not eligible for voting`)
    }
}
vote()

//===========CHAPTER:Arrow Function

//Square of a Number:
//Ques: Write an arrow function that takes a number as input and returns its square.

var square = squareNumber => squareNumber*squareNumber
var findSquare = +prompt('Find Any number square:')

console.log(square(findSquare))

//Array of Even Numbers:
//Ques: Create an arrow function that takes an array of numbers and returns a new array containing only the even numbers.

var arr = evnumbers => evnumbers.filter(num => num % 2 === 0)

var allNumbers = [17,32,47,58,96,61,74,87,29,92]
var evenNum = arr(allNumbers)

console.log(evenNum)

//Concatenate Strings:
//Ques: Write an arrow function that takes two strings as arguments and returns them concatenated.

var concatenate = (conca,tenate) => `${conca +" "+ tenate}` 
console.log(concatenate('Hello','Saheba'))

//Find Maximum Number in an Array:
//Ques: Create an arrow function that accepts an array of numbers and returns the maximum value in the array.

var maxNu = arrmax => Math.max(...arrmax);
var mAx = [1,3,5,7,8,9,12,42,94];

var maxNum = maxNu(mAx);

console.log(maxNum);

//Sum of All Numbers in an Array:
//Ques: Write an arrow function that takes an array of numbers as input and returns the sum of all the numbers.

var arr = sumArray => {
  var num = 0 
  for (var i = 0; i< sumArr.length; i++){
    num += sumArr[i]
  }
  return num
}

var sumArr = [1,2,3,4,5,6,7,8]

var sumNu = arr(sumArr)

console.log(sumNu)

//Print "Hello World" (No Parameters):
//Ques: Write an arrow function that takes no parameters and simply prints "Hello World" to the console.

var greeting = () => 'Hello Saheba'
console.log(greeting())

//Calculate Square of a Number (With Parameter):
//Ques: Create an arrow function that takes a number as a parameter and returns its square.

var squa = sqnumber => sqnumber * sqnumber
console.log(squa(6))

//Check if Number is Positive (With Parameter):
//Ques: Write an arrow function that accepts a number as a parameter and returns true if the number is positive, and false if it is negative or zero.

var posNum = positive => positive > 0

var positive = +prompt('Enter number to find if it positive or not:')
var posNum = posNum(positive)

if (positive > 0){
    alert(`${positive} is a positive number`)
}else{
    alert(`${positive} is a negative number`)
}

//Generate a Random Number (No Parameters):
//Ques: Create an arrow function that takes no parameters and returns a random number between 1 and 50.

var randNum = RandoNum => Math.floor(Math.random(RandoNum)*51)
console.log(randNum())

//Convert Minutes to Seconds (With Parameter):
//Ques: Write an arrow function that takes minutes as a parameter and returns the equivalent time in seconds.

var minutes = min => min * 60

var min = +prompt('Enter minutes:')
var minanswer = minutes(min)

console.log(`Convert to sec: ${minanswer}`)

//Print "Hello" (No Parameters):
//Ques: Create an anonymous function that prints "Hello" to the console. Immediately invoke the function.

(function(){
    console.log('Hello Saheba')
})()

//Sum of Two Numbers (With Parameters):
//Ques: Write an anonymous function that takes two numbers as arguments and returns their sum. Assign it to a variable and call the function.

var sumOfNum = function(num3,num4){
    console.log(num3 + num4)
}(3,4)

//Array Sorting (With Parameters):
//Ques: Use an anonymous function as a callback in Array.sort() to sort an array of numbers in ascending order.

var ascen = [3,2,5,4,8,1,9,10,7]

ascen.sort(function(j,k){
    return j - k
})

console.log(ascen)

//Greeting Message (With Parameter):
//Ques: Create an anonymous function that takes a name as a parameter and logs a greeting message like "Hello, [name]!". Immediately invoke the function.

(function(name){
    console.log(`Hello ${name}`)
})('Saheba')

//Check if Number is Even or Odd (With Parameter):
//Ques: Write an anonymous function that takes a number as a parameter and logs whether the number is even or odd. Store it in a variable and then invoke it.

(function(anevenNu){
    var anevenNu = +prompt('Enter Number:')
    if (anevenNu % 2 === 0){
        alert(`${anevenNu} is an even number`)
    }else{
        alert(`${anevenNu} in an odd number`)
    }
})()

//Filter Odd Numbers from an Array (With Parameters):
//Ques: Use an anonymous function as a callback in Array.filter() to return only the odd numbers from an array of integers.


var oddNum = function(callBack){
    return callBack.filter(callBack => callBack % 2 != 0);
}

var oddArr = [1,2,3,4,5,6,7,8,9,10]
oddArr = oddNum(oddArr)

console.log(oddArr)

//Factorial Calculation (With Parameter):
//Ques: Create an anonymous function that takes a number as input and returns its factorial. Assign the function to a variable and call it with different inputs.

var factorialNumber = function(factorial){
    if(factorial === 1 || factorial === 0){
        return 1
    }
    return factorial * factorialNumber(factorial - 1)
}

console.log(factorialNumber(3))
console.log(factorialNumber(4))
console.log(factorialNumber(5))
console.log(factorialNumber(6))
console.log(factorialNumber(7))
console.log(factorialNumber(8))

//Anonymous Function in Timeout (No Parameters):
//Ques: Use an anonymous function inside setTimeout() to print a message like "Time's up!" after 2 seconds.

setTimeout(function(){
    console.log('Time is up!')
},2000)

//Sum of All Elements in an Array (With Parameter):
//Ques: Write an anonymous function as a callback in Array.reduce() to sum all the elements in an array.

var redArr = [2,3,4,5,6,7,8,9]

var add = redArr.reduce(function(hos,eko){
    return hos + eko
})

console.log(`sum of this array is ${add}`);

//Check Voting Eligibility (With Parameter):
//Ques: Create an anonymous function that takes an age as input and logs whether the person is eligible to vote (age >= 18). Immediately invoke the function with different ages.

(function(ages){
    var ages = +prompt('Enter your age:')
    if(ages >= 18){
        console.log('You are eligible for voting')
    }else{
        console.log('You are not eligible for voting')
    }
})()