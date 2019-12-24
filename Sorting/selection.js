/**
 * Selection Sort (Runtime O(n^2) by for loops)
 *      Take lowest element from the entire list, 
 *      put it into the front, repeat until list is fully sorted.
*/

/**
 * Input setup
 */
let list = [];

for (let i = 0; i < 10; i++) {
    list.push( parseInt((Math.random() * 100) + 1) )
}

console.log(list);

/**
 * We will not start off with a while loop, because we will not constantly
 * check if the list is sorted, the selections will let us sort it and
 * we will be sure by the end it will be sorted.
 * 
 * So we will start with a for loop, with the length of list - 1, because
 * the last element will always be the highest number.
 */

/**
 * If this was a linked list, we would Remove and Insert elements
 * based on node references and switch those, but since it is an array, we will use
 * the splice property: .splice(index, amount, newElement) 
 * 
 * to insert a variable: .splice(4, 1, "newElem")
 * to remove a variable: .splice(3, 1)
 * 
 * This way, we will replace the "current index" we are on, with the lowest
 * element in the list in iteration.
 */

 /** 
  * We will use a for loop to iterate current index, and another for loop
  * to find the lowest element in the list.
 */


 //Global switching element to not create multiple assigns
 let buffer = -1;
 let lowest = Number.MAX_SAFE_INTEGER; 

 // Current element to replace the lowest element with: i
 for (let i = 0; i < list.length - 1; i++) {

    //Use list[i+1], to check against next value from current (i)
    lowest = i+1; 
     
    //Finding the lowest element from the list: j
    // j is = i because we know previous i's will be lowest already/used up.
    for(let j = i; j < list.length; j++) {
        // save the index, not the data element, since j changes on next iteration.
        if (list[lowest] > list[j]) lowest = j;
    }

    // (This one should be saving data element as we know the index of i)
    buffer = list[lowest];
    
    // Set (list[i] =) the current element to element on lowest index
    // Insert (splice) the current element's value to lowest's index
    list[lowest] = list.splice(i, 1, buffer).pop()
    
 }

 //Selection sort takes out lowest elements one by one and switches them
 //with the ones in the front, iterating through to length - 1.

 //Runtime O(n^2) because of double for loop
console.log(list);
