function findLongestWord(string = "") {
  // Write code under this line
  let result;
  let bestResult = "";
  let resultLength = 0;
  string = string.split(" ");
  for (let i = 0; i < string.length; i += 1) {
    result = string[i];
    if (result.length > resultLength) {
      resultLength = result.length;
      bestResult = result;
    }
  }
  console.log(resultLength);
  return bestResult;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

// console.log(findLongestWord("Google do a roll"));
// 'Google'

// console.log(findLongestWord("May the force be with you"));
// 'force'
