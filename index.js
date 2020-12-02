// Write a function named fizzBuzz that takes two(2) strings  and returns Fizz if the combined length of the strings is divisible by 3,  Buzz if it is divisible by 5, FizzBuzz if it is divisible by both 5 and 3  or the combined length of the list

for ( var numbers = 1; numbers <= 100; numbers++) {  //Lists numbers to 100

    
    if (numbers % 15 === 0 ) {  //if number is divisible by 5 or 3 prints FizzBuzz
        console.log("FizzBuzz") }
    else if (numbers % 5 === 0) { //if number is divisible by 5 prints Buzz
        console.log("Buzz") }
    else if (numbers % 3 === 0 ) { //if number is divisible by 3 prints Fizz
        console.log("Fizz") }
    else {
        console.log(numbers) } // if neither prints the number
    
    }

    // Write a javaScript program that prompts a user to enter their year of birth and in turn prints a string in the console stating whether the user  is a minor, a youth or an elder.  Anyone below 18 years is a minor, anyone between 18 and 36 years of age is a youth and the rest are elders.
    let birth = prompt("Please enter your year of Birth");
    let now = new Date();
      let age = now.getYear() - birth + 1900;
      if(age<18) {
        console.log("Minor");
      }
    else if(age>=18 && age<36) {
        console.log("Youth");
    }
    else { console.log("Elder");
  }
//Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
function LongestWord(sen) {
    sen = sen.split(" ");
    var longst = sen[0];
   
    for (i = 0; i < sen.length; i++) {
      if (i == sen.length - 1) {
        return longst;
      } else if (sen[i].length >= sen[i + 1].length) {
        longst = sen[i];
      } else {
          longst = sen[i + 1];
      }
    }
  }
// Given an Array containing integers, floats and one character strings, write a function that takes an Array and returns an Object with keys evens, odds, and chars. The value for evens is an array of sorted even numbers, the value for odds is a list of sorted odd numbers and chars is a list of sorted character strings.  
var array = [40, 100, 1, 5, 25.68, 10];
array.sort(function(a, b){return a-b});
