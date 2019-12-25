/**
 * Merge Sort (Runtime: O (n log n))
 *      divide the list by half, sort each side, 
 *      merge (with sort) them together. This uses 
 *      as many recursive calls it needs until sorted.
*/

let list = []; // Unsorted list

// Input setup, randomized set of elements, unsorted
for (let i = 0; i < 10; i++) {
    list.push( parseInt((Math.random() * 100) + 1) )
}

list = [5, 3, 4, 8, 2, 6] //Temporary test placement
console.log(list);

// We will make a recursive function that will divide the list in halves until it cannot (higher <= lower)

/**
 * 
 * @param {Array} list - The original set of unorganized numbers to overwrite 
 * @param {Array} helper - A buffer to copy elements from the original list
 * @param {Integer} low - Lower bound of the subset list to start iterating
 * @param {Integer} high - Upper bound of the subset list to end iterating
 */
function sorting(list, helper, low, high) {

    // While the end index is larger than the beginning, keep dividing.
    if (low < high) { // Or: If (low != high)
        // Midpoint element of the subset list to halve 
        let mid = Math.floor((low + high) / 2); 
        sorting(list, helper, low, mid) // Left subset
        sorting(list, helper, mid+1, high) // Right subset
        merging(list, helper, low, mid, high) //Merge with sort
    }
}

// The merging function will make two pointers, one for each halved sublist, and sort by picking the lower elements into the list

/**
 * 
 * @param {Array} list - The original set of unorganized numbers to overwrite 
 * @param {Array} helper - A buffer to copy elements from the original list
 * @param {Integer} low - Lower bound of left subset to iterate through
 * @param {Integer} mid - Lower bound of right subset to iterate through
 * @param {Integer} high - Upper bound of the subset list to end iterating
 */
function merging(list, helper, low, mid, high) {

    // Copy over the elements from list to helper
        // i = low for the beginning of the subset, 
        // i <= high to iterate through ALL indexes
    for (let i = low; i <= high; i++) {
        helper[i] = list[i];
    }

    // Now create two pointers to iterate though both lists, and current to overwrite values.
    let pLeft = low;
    let pRight = mid+1;
    let current = low;

    //Iterate through both lists to the end
        //low <= mid,  mid+1 <= high 
    while (pLeft <= mid && pRight <= high) {
        // Choose which is lower from the helper buffer list, overwrite into main list and
        // increment that specific pointer to the next in line, & also increment current position.
        if (helper[pLeft] < helper[pRight]) {
            list[current] = helper[pLeft]
            pLeft++;
        }
        else {
            list[current] = helper[pRight]
            pRight++;
        }
        current++;
    }

    // Still do not understand this
    
    let remaining = mid-pLeft; // Left subset that was not checked
    for (let i = 0; i <= remaining; i++) {
        // Copy over unchecked elements from helper to the end of main list
        
        /* Self note
        
            Are these the leftover highest elements, which is why they are put to the end of the list? 
        
        */
        list[current + i] = helper[pLeft + i];
    }
}

/**
 * Function will take an input and sort it with helper functions
 * 
 * @param {Array} list - Initial unsorted input list
 */
function driver(list) {
    let helper = [];
    // Input list, empty helper buffer, 0 is low bounded index, length -1  is high bounded index
    sorting(list, helper, 0, list.length - 1)
}

driver(list);
console.log(list);

/* Self note

    Do we need a callback to make sure it runs after sorting is complete? Where do we place cb?

*/