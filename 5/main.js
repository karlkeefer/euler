let answer = false;
let i = 1;

while (!answer) {
  i++;
  let divisibleByAll = true;
  for (let d = 2; d <= 19; d++) {
    if (!(i % d === 0)) {
      divisibleByAll = false; 
    }
  }

  if (divisibleByAll) {
    answer = i;
  }
}

console.log(answer);