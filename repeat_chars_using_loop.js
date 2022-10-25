/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/

//1st attempt
// const character = 'f';
// const timesToRepeat = 5;
// let myString = ''; 

// //your code
// for (let myString = 0; i <= timesToRepeat; character++) {
//   console.log(i);
//   character++;
// }

// console.log(myString); // fffff


//answer
const character = 'f';
const timesToRepeat = 5;
let answer = '';

for (let i = 0; i < timesToRepeat; i++) {
  answer += character;
}

console.log(answer);
