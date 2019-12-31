/**
 * Radix sort 
 * 
 * O(kn) Runtime
 * 
 * Sort by the last digit of the elements, then the second last, and so on.
 * Page 148
 */

 
/**
 * Input Setup
 */
let list = [];

for (let i = 0; i < 10; i++) {
    list.push( parseInt((Math.random() * 100) + 1) )
}

console.log(list);
