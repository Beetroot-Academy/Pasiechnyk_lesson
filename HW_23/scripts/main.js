/*Write a function that returns a string in which firstname is swapped with last name.
Example(Input --> Output)
"john McClane" --> "McClane john"*/

function nameShuffler(str){
   return (str.split(' ').reverse().join(' '));
}


/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings. */

function areYouPlayingBanjo(name) {
   if (name[0] === 'R' || name[0] === 'r') {
      return `${name} plays banjo`;
   } else {
      return `${name} does not play banjo`;
   }
}

/*Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).
For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
Hint: Don't forget to check for bad values like null/undefined */

function countSheeps(arrayOfSheep) {
   let sheeps = 0
   for(let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) sheeps += 1
   }
   return sheeps
}

/*Complete the function that takes a non-negative integer n as input, 
and returns a list of all the powers of 2 with the exponent ranging from 0 to n
( inclusive ).
Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2] */

function powersOfTwo(n){
   let result = [];
   for (let i = 0; i <= n; i++) {
     result.push(2 ** i);
   }
   return result;
}

 /*In this kata you will create a function that takes a list of non-negative 
 integers and strings and returns a new list with the strings filtered out.
Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

function filter_list(l) {
   return l.filter( str => typeof str != 'string');
}

 /*Story
Ben has a very simple idea to make some profit: he buys something and sells it again. 
Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. 
Instead, he's going to buy it for the lowest possible price and sell it at the highest.
Task
Write a function that returns both the minimum and maximum number of the given list/array.
Examples(Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5, 2334454]
[1]         --> [1, 1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. 
Also, your function will always get an array or a list, you don't have to check for null, undefined or similar. */

function minMax(arr){
   return [Math.min(...arr), Math.max(...arr)];
}

/*Bob needs a fast way to calculate the volume of a cuboid with three values: 
the length, width and height of the cuboid. Write a function to help Bob with this calculation. */

class Kata {
   static getVolumeOfCuboid(length, width, height) {
     return (length * width * height);
   }
}

/*You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.
https://en.wikipedia.org/wiki/Triangle */

function otherAngle(a, b) {
   let c = 180 - (a + b);
   return c;
}

/*Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */

function boolToWord( bool ){
   let str = bool === true ? "Yes" : "No";
   return str
}

/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)
Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */


function stray(numbers) {
   let arr = numbers.sort();
   if (arr[0] !== arr[1]) {
   return arr[0];
   } else {
      return arr[arr.length - 1];
   }
}