/**
 * Quick Sort:
 * Pick elements on random, and move them from right-higher to
 *  left-lower or vice versa, based on the pivot element
 * 
 * O(n log n) Runtime, worst being O(n^2) if pivot not in center
 * 
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

//