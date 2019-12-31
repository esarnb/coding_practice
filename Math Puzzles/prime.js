// Figure out prime num out of a range or given list


/* Check if x is a prime number */

// Naive way

function primeNaive(x) {
    if (x < 2) return false;

    //Start with 2, as the first prime. 2 to n-1
    for (let i = 2; i < x; i++) {
        // Found a value divisible, so return false for prime
        if (x % i == 0) return false;
    }
    return true;
}


/**
 * 
 *  Up to sqrt of x
 * 
 *  "If a number n is not a prime, it can be factored 
 *  into  two factors a and b: n = a * b
 * 
 *  If both a and b were greater than the square root 
 *  of n, then a * b would be greater than n. 
 * 
 *  So at least one of those factors must be less than  
 *  or equal to the square root of n, and if we can't 
 *  find any factors less than or equal to the square 
 *  root, n must be prime."
 * 
 * - Sven Marnach (https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-prime-number-to-determine-if-it-is-pr)
 *  
 */
function primeBetterish(x) {
    if (n < 2) return false;

    // iterate up to the sqrt of x since for every number 'a' which divides n evenly, there is a complement 'b',
    let sqrt = parseInt(Math.sqrt(x))

    for (let i = 2; i <= sqrt; i++) { if (x % i == 0) return false; }
    return true;
}


/**
 * Best Way: 
 * 
 *      Generating a List of Primes: The Sieve of Eratosthenes  (Page 118)
 * 
 * 
 * The Sieve of Eratosthenes is a highly efficient way to generate a list of primes. It works by recognizing that
 * all non-prime numbers are divisible by a prime number.
 * 
 * We start with a list of all the numbers up through some value max. First, we cross off all numbers divisible by
 * 2. Then, we look for the next prime (the next non-crossed off number) and cross off all numbers divisible by
 * it. By crossing off all numbers divisible by 2, 3, S, 7, 11, and so on, we wind up with a list of prime numbers
 * from 2 through max. 
 * 
 */


function sieveOfEratosthene() {
    
}