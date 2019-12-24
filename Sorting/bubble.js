//given a list, sort it by bubble sort

// bubble sort is when you check the first 2 elements, sort lowest, then next 2
// (a,b,c,d) // first a,b // then b,c // then c,d // then loop till fully sorted

/**
 * Input Setup
 */
let list = [];

for (let i = 0; i < 10; i++) {
    list.push( parseInt((Math.random() * 100) + 1) )
}

console.log(list);

/**
 * Bubble Sort (Runtime: O(n^2) by for and while)
 *      Switch 2 elements if first is higher than second, 
 *      throughout the list until it is fully sorted.
 */

//Choose a while loop to make sure to keep bubble sorting the segments until it is fully sorted
let fullySorted = false
let buffer = 0; //switching variable global to not constantly create new variables

// iterate through the list entirely, with two neighbor indexes to sort them (length - 1)
while (!fullySorted) {
    // If the list is not sorted, this will indicate false. If finished, it will stay true and skip the while loop.
    fullySorted = true;    
    for(let i = 0; i < list.length - 1; i++) {
        // Get the neighboring indexes. Switch them if needed, if so, set fullySorted to false since we sorted.
        // If the previous is greater than next, switch. Less than or equal to, dont need to switch.
        if (list[i] > list[i + 1]) {
            
            //Switch the variables
            let buffer = list[i];
            list[i] = list[i+1];
            list[i+1] = buffer;

            //Re-evaluate list again
            fullySorted = false;
        }
    }
}

//Bubble sort is sorting 2 elements at a time, moving window
console.log(list);
