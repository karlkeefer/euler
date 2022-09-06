let validDigits = [319, 680, 180, 690, 129, 620, 762, 689, 762, 318, 368, 710, 720, 710, 629, 168, 160, 689, 716, 731, 736, 729, 316, 729, 729, 710, 769, 290, 719, 680, 318, 389, 162, 289, 162, 718, 729, 319, 790, 680, 890, 362, 319, 760, 316, 729, 380, 319, 728, 716]

// 1,2,3,6,7,8,9,0 (minium 8 digit length)

// valid code checks to see if our passcode fits with all known successful codes
// it returns false as soon as it knowns a passcode is invalid
const validCode = (code) => {
  if (code.indexOf(4) > -1 || code.indexOf(5) > -1) {
    // the shortest valid code won't contain a 4 or 5
    return false;
  }

  for (let i=0; i < validDigits.length;i++) {
    const digits = String(validDigits[i]);

    const first = code.indexOf(digits[0])
    if (first === -1) {
      return false;
    }

    const second = code.indexOf(digits[1])
    if (second === -1) {
      return false;
    }

    const third = code.indexOf(digits[2])
    if (third === -1) {
      return false;
    }

    if (first > second || second > third) {
      return false;
    }
  }

  return true;
}

// run the program

let i = 10000000;
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
