/**
 * Merge Sort (Runtime: O (n log n))
 *      divide the list by half, sort each side, 
 *      merge (with sort) them together. This uses 
 *      as many recursive calls it needs until sorted.
*/

/**
 * Input setup
 */
let list = [];

for (let i = 0; i < 10; i++) {
    list.push( parseInt((Math.random() * 100) + 1) )
}

list = [5, 3, 4, 8]
console.log(list);
//


/**
 * Merge sort splits the list in halves until there is 2 to sort.
 * Once that is sorted, it is put back together, and those are sorted.
 * Recursively breaking it apart and stitching it together.
 */


 // We will have a split for the left half, and the right half.
 // So we need midpoint values to split them. Once its split, we
 // merge them by picking which one is lower/higher and assign it.
 // A helper array will be used, to assign sorted variables back.
let helper = []
let mid = -1
function sorting(list, helper, low, high) {
    //Once high index is <= low index, we stop that recursive thread.
    if (high < low) {
        // Example: high(5) // 2 = mid(2). low = 0, high = 2
        //          high(2) // 2 = mid(1). low = 0, high = 1
        //          high(1) // 2 = mid(9). low = 0, high = 0. This is skipped & ended.
        // We do this for the left and right side. Then we merge.
        
        mid = Math.floor(high / 2) // High is the end of the subset length, pivot.
        sorting(list, helper, low, mid) // Left of pivot
        sorting(list, helper, mid+1, list.length) // Right  of pivot

        //Then we merge and check which data on the index is < and choose that.
        merging(list, helper, low, mid, high);

    }
}

function merging(list, helper, low, mid, high) {
    if (list[low] < list[mid+1]) helper[low] = list[low]
    else helper[low] = list[mid+1]
}

console.log(helper);


































/*

    
function driver(list) {
    let helper = [];
    sorting(list, helper, 0, list.length - 1)
}

function sorting(list, helper, lower, higher) {
    if (lower < higher) {
        let middle = parseInt( (lower + higher) / 2 )
        sorting(list, helper, lower, middle) // Helper is set with left side
        sorting(list, helper, middle+1, higher) //Helper is set with right side
        merge(list, helper, lower, middle, higher)
    }
}

function merge(list, helper, lower, middle, higher) {

    console.log(helper);
    

    // copy list's range of elements to helper (whether its left/right)
    for (let i = lower; i <= higher; i++) {
        helper[i] = list[i];
    }

    
    // After both lists have been added, we make two index pointers
    //  to check against each other, to see which is lower. We insert
    //  chosen element into the new current list and increment chosen side's pointer. 

    //  Since this is in a while loop, it is sorting through the entire sublist.


    // Set helper bounds 
    let helperLeft = lower;
    let helperRight = middle + 1;
    let current = lower;

    while (helperLeft <= middle && helperRight <= higher ) {
        if (helper[helperLeft] < helper[helperRight]) {
            list[current] = helper[helperLeft];
            helperLeft++;
        }
        else {
            list[current] = helper[helperRight];
            helperRight++;
        }
        current++;
    }

    //        still dont understand this

    let remaining = middle-helperLeft;
    for (let i = 0; i <= remaining; i++) {
        list[current + i] = helper[helperLeft + i];
    }
}

driver(list)

*/



