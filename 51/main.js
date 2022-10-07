/*
By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.
*/

// generate primes
let primeList = [2];
let i = 0;

const isPrime = (num) => {
    let prime = true;
    primeList.forEach(p => {
        if (num % p === 0) {
            prime = false
        }
    })

    return prime;
}

// generate tons of primes
for (let i=3; i < 100000;i++) {
    if (isPrime(i)){
        primeList.push(i);
    }
}

// group by length
let primeByDigits = {};

primeList.forEach(p=>{
    let len = String(p).length;
    if (!primeByDigits[len]) {
        primeByDigits[len] = [p];
    } else {
        primeByDigits[len].push(p);
    }
})

// generate digit patterns
const permute = (permutation) => {
    var length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1, k, p;
  
    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        result.push(permutation.slice());
      } else {
        c[i] = 0;
        ++i;
      }
    }
    return result.map(items => items.join(''));
}

const digitMatch = "[0-9]{1}" 
const wildCardMatch = "x"

// generate digit patterns for regex tests
// x will be replaced laters
const digitPattern = (len) => {
    let patterns = [];
    for (let digits = 1; digits < len; digits++) {
        let p = [];
        for (let i = 0; i < digits; i++) {
            p.push(digitMatch);
        }
        for (let i = 0; i < len-digits; i++) {
            p.push(wildCardMatch);
        }
        patterns = patterns.concat(permute(p));
    }
    
    return patterns;
}

// generate patterns, then test those patterns against primes to build "families"
// NOTE: this may be a dead-end approach... 
// I'm really unsure how to make "test patterns" for a family.

// ...maybe a giant hashMap {} where the key is each digit, including a "wildcard" digit in each spot?
// {
//   *: {
//     1: [ 11, 31, 41, 61, 71 ]
//   }
// }

const digitLength = 2;
const patterns = digitPattern(digitLength);

let results = {};

patterns.forEach(pattern => {
    for (let i=0;i<10;i++) {
        let patternWithDigit = pattern.replace('x',i);
        let regex = new RegExp(patternWithDigit);
        primeByDigits[digitLength].forEach(p => {
            if (regex.test(String(p))) {
                if (!results[regex]) {
                    results[regex] = [p];
                } else {
                    results[regex].push(p);
                }
            }
        })
    }    
})

console.log(results);

