// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2

// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

var a = 0;
var b = 0;
var c = 0;

while (a + b + c !== 1000){
    c = 0;
    a += 1;
    b = a+1;
    
    while (a + b + c < 1000) {
        b += 1;
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
}

console.log(a, b, c, a * b * c);
