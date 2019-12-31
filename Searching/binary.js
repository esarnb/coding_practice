/**
 * Binary Searching (Uses sorted list)
 * 
 * Looks for an element x by comparing x to the midpoint.
 * If x is < the mid, cuts the arr to left half and 
 * checks again to pick which side to cut.
 * 
 * Loop until x is found or subarray has a size of zero.
 */


// While loop to look for element in a list
function binarySearch(arr, x) {
    let low = 0, mid = null, high = arr.length - 1;

    while (low <= high) {
        mid = Math.floor((low+high)/2);
        
        if (arr[mid] < x) low = mid + 1 // Pick right side range
        else if (arr[mid] > x) high = mid - 1 // Pick left side range
        else return mid; // mid is x
    }
    return -1; //Could not find elem in list
}



// Recursively find element in list
function binarySearchRecursive(arr, x, low, high) {
    if (low > high) return -1 //out of bounds, couldnt find element in this subset

    let mid = Math.floor((low+high)/2)
    if (arr[mid] < x) return binarySearchRecursive(arr, x, mid+1, high) // Pick right side range
    else if (arr[mid] > x) return binarySearchRecursive(arr, x, low, mid-1)  // Pick left side range
    else return mid; // mid is x
    
}




 
/**
 * Input Setup
 */
let list = [];

for (let i = 0; i < 10; i++) {
    list.push( parseInt((Math.random() * 100) + 1) )
}
list.sort((a,b) => a-b)
console.log(list);

let i = 4; // Find this specific element in the list using binary search
console.log(`Find Index ${i} value: ${list[i]} `); //
console.log("Binary: ", binarySearch(list, list[i])) // Expected: 4
console.log("Recursive: ", binarySearchRecursive(list, list[i], 0, list.length - 1)) // Expected: 4


//To DO: log time ran for each type