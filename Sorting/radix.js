/**
 * Radix sort 
 * 
 * O(kn) Runtime
 * 
 * Sort by the last digit of the elements, then the second last, and so on.
 * Page 148 - No Pseudocode given
 */

 
/**
 * Input Setup
 */
let list = [];

for (let i = 0; i < 10; i++) {
    list.push( parseInt((Math.random() * 100) + 1) )
}

console.log(list);

// Pesudocode

/**
 * Sort by getting the last digits of each element
 *      run a function on each element to get the last index, or, recursively check on each index of number
 * 
 * Then, when that iteration is over, increment the digit to check and run again
 * 
 * Whenever the digit increment goes higher than the digit length, skip over the index. 
 *      This  is checking all elems in a list, so for loops and digit lengths (or digit sizes like [if x < 100 or (x < 200 && > lowestMark) ])
 * 
 * By the end this would sort it least to greatest.
 */


// Radix