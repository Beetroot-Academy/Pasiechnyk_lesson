/*Implement a function that accepts 3 integer values a, b, c. 
The function should return true if a triangle can be built with the sides of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted). */

function isTriangle(a,b,c) {
   return a + b > c && a + c > b && c + b > a;
}

/*Given two numbers and an arithmetic operator (the name of it, as a string), 
return the result of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
The four operators are "add", "subtract", "divide", "multiply".
A few examples:(Input1, Input2, Input3 --> Output)
5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements! */

function arithmetic(a, b, operator) {
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}

/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

function even_or_odd(number) {
  if(number % 2 === 0) {
       return 'Even';
  } else {
       return 'Odd';
  }
}

/*Count the number of divisors of a positive integer n.
Random tests go up to n = 500000.
Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30) */

function getDivisorsCnt(n){
  let count = 0;
  if ( n === 1 ){
    return 1
  }
  for (i = 1; i <= n; i++) {
    if ( n % i === 0) {
      count++
    }
  }
  return count
}

/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) */

function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.
Examples: (Input --> Output)
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"] */

var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

/*Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.
Note: a and b are not ordered!
Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2) */

function getSum( a,b ) {
  if (a == b) {
      return a
  } else if (a < b) {
      return a + getSum(a+1, b)
  } else {
      return a + getSum(a-1, b)
  };
}

/*Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.
Example:
h = 0
m = 1
s = 1
result = 61000
Input constraints:
0 <= h <= 23
0 <= m <= 59
0 <= s <= 59 */

function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}

/*Character recognition software is widely used to digitise printed texts. 
Thus the texts can be edited, searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), 
are digitised character recognition softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. */

function correct(string) {
  return string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I');
}

/*Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. */

function findShort(s){
  let arr = s.split(" ").sort((a, b) => a.length - b.length);
  return arr[0].length
}

