const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  let newArr = [];
  for (let i = 0; i < letters[0].length; i++) {
    newArr.push([]);
  }
  // outer loop
  for (let c = 0; c < letters.length; c++) {
    for (let r = 0; r < letters[c].length; r++) {
      // inner content
      newArr[r][c] = letters[c][r];
    }

    console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
      let newWord = newArr[i].join("");
      if (newWord === word) {
        return true;
      }
      console.log(newWord);
    }
  }

  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

console.log(
  wordSearch([
    ["a", "b", "c"],
    ["d", "f", "g"],
  ]),
  ""
);

// console.log(
//   wordSearch(
//     [
//       ["A", "W", "C", "F", "Q", "U", "A", "L"],
//       ["S", "E", "I", "N", "F", "E", "L", "D"],
//       ["Y", "F", "C", "F", "Q", "U", "A", "L"],
//       ["H", "M", "J", "T", "E", "V", "R", "G"],
//       ["W", "H", "C", "S", "Y", "E", "R", "L"],
//       ["B", "F", "R", "E", "N", "E", "Y", "B"],
//       ["U", "B", "T", "W", "A", "P", "A", "I"],
//       ["O", "D", "C", "A", "K", "U", "A", "S"],
//       ["E", "Z", "K", "F", "Q", "U", "A", "L"],
//     ],
//     "SEINFELD"
//   )
// );

module.exports = wordSearch;
