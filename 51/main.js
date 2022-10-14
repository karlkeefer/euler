/*
By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.
*/

const digitLength = 6;

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
for (let i=3; i < Math.pow(10, digitLength);i++) {
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

// make a giant hashMap {} where the key is each digit, including a "wildcard" digit in each spot?
// {
//   *: {
//     1: [ 11, 31, 41, 61, 71 ]
//   }
// }

let results = {};

const insertPattern = (pattern, prime) => {
    if (pattern == String(prime)) {
        return null;
    }

    let insertPoint = results;
    for( let j=0; j < pattern.length; j++) {
        const currentDigit = pattern[j];
        if (j === digitLength - 1) {
            if (!insertPoint[currentDigit]) {
                insertPoint[currentDigit] = [prime];
            } else {
                if (!insertPoint[currentDigit].includes(prime)) {
                    insertPoint[currentDigit].push(prime);
                    if (insertPoint[currentDigit].length > 6) {
                        // only output large families
                        console.log(insertPoint[currentDigit]);
                    }
                }
            }
        } else {
            if (!insertPoint[currentDigit]) {
                insertPoint[currentDigit] = {};
            }

            insertPoint = insertPoint[currentDigit];
        }
    }
}

// TODO: the replacement logic for generating * patterns is slow, but also doesn't handle more than 3 occurences(!)
primeByDigits[digitLength].forEach(prime => {
    for (let i=0;i<10;i++) {
        let pattern = String(prime).replace(new RegExp(i, 'g'),'*');
        insertPattern(pattern, prime);

        let occurences = pattern.length - String(prime).replace(new RegExp(i, 'g'),'').length;
        if (occurences > 1) {
            // first and last, 1 star
            pattern = String(prime).replace(i,'*');
            insertPattern(pattern, prime);
            pattern = String(prime).split('').reverse().join('').replace(i,'*').split('').reverse().join('');
            insertPattern(pattern, prime);
        }
        if (occurences > 2) {
            // first 2, last 2, middle star
            pattern = String(prime).replace(i,'*').replace(i,'*');
            insertPattern(pattern, prime);
            pattern = String(prime).split('').reverse().join('').replace(i,'*').replace(i,'*').split('').reverse().join('');
            insertPattern(pattern, prime);
            let count = 0;
            pattern = String(prime).split('').map(char => {
                count++;
                if (count == 2) {
                    return '*';
                } else {
                    return char;
                }
            }).join('');
            insertPattern(pattern, prime);
        }
        if (occurences > 3) {
            // generate the 3 star permutations
        }
    }    
})
