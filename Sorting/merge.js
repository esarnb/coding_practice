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



//Merge Sorting






















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