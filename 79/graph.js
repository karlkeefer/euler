let validSubsets = [319, 680, 180, 690, 129, 620, 762, 689, 762, 318, 368, 710, 720, 710, 629, 168, 160, 689, 716, 731, 736, 729, 316, 729, 729, 710, 769, 290, 719, 680, 318, 389, 162, 289, 162, 718, 729, 319, 790, 680, 890, 362, 319, 760, 316, 729, 380, 319, 728, 716]

let canFollow = {};

// loop through the valid subsets to build a map of which numbers can follow which other numbers
validSubsets.forEach(code => {
  const first = String(code)[0];
  const second = String(code)[1];
  const third = String(code)[2];

  if (!canFollow[first]) {
    canFollow[first] = {};
  }

  if (!canFollow[second]) {
    canFollow[second] = {};
  }
  if (!canFollow[third]) {
    canFollow[third] = {};
  }

  canFollow[first][second] = true;
  canFollow[second][third] = true;
})

// log out our graph thing
console.log(canFollow);

// we can find the valid code by sorting the keys of our graph by the number of entries within
// i.e. the 7 comes first because it has the most possible digits that follow
const ordered = Object.keys(canFollow).sort((a,b) => {
  return Object.keys(canFollow[a]).length < Object.keys(canFollow[b]).length ? 1 : -1;
}).join('');

console.log(ordered);
