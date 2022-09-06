let validSubsets = [319, 680, 180, 690, 129, 620, 762, 689, 762, 318, 368, 710, 720, 710, 629, 168, 160, 689, 716, 731, 736, 729, 316, 729, 729, 710, 769, 290, 719, 680, 318, 389, 162, 289, 162, 718, 729, 319, 790, 680, 890, 362, 319, 760, 316, 729, 380, 319, 728, 716]

// 1,2,3,6,7,8,9,0 (minium 8 digit length)

// validCode is a function that checks to see if our passcode fits with all known successful subsets
// it returns false *as soon as it knowns* a passcode is invalid to save the compute of checking all the other subsets
const validCode = (passcode) => {
  if (passcode.indexOf(4) > -1 || passcode.indexOf(5) > -1) {
    // the shortest valid passcode won't contain a 4 or 5
    return false;
  }

  for (let i=0; i < validSubsets.length;i++) {
    const digits = String(validSubsets[i]);

    const first = passcode.indexOf(digits[0])
    if (first === -1) {
      // indexOf returns -1 if the digit isn't found
      return false;
    }

    const second = passcode.indexOf(digits[1])
    if (second === -1) {
      return false;
    }

    const third = passcode.indexOf(digits[2])
    if (third === -1) {
      return false;
    }

    if (first > second || second > third) {
      // ensure they occur in the passcode in the right order
      return false;
    }
  }

  return true;
}

// run the program

let i = 10000000; // at least 8 digit number
let answer = false;

while (!answer) {
  i++;
  // log our progress every 1000000 entries, to get some idea of how fast it's going
  if (i % 1000000 === 0){
    console.log(`Checking ${i}`)
  }

  if (validCode(String(i))) {
    answer = i;
  }
}

console.log(answer);
