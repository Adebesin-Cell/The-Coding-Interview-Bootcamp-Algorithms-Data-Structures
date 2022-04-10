// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

module.exports = reverse;

//my solution
// function reverse(str) {
//   let newStr = [];

//   for (let i = 0; i < str.length; i++) {
//     newStr.push(str[i]);
//   }

//   return newStr.reverse().join("");
// }

//instructor solution--1

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// function reverse(str) {
//   debugger;
//   return str.split("").reduce((rev, char) => char + rev, "");
// }
