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

// Subdivide the list by quicksort and partitions to sort them
function quickSort(arr, left, right) {
    let index = partition(arr, left, right);

    if (left < (index-1)) quickSort(arr, left, index-1) // Sort left half
    if (index < right) quickSort(arr, index, right) // Sort right half
}

//
function partition(arr, left, right) {
    // Pick center pivot point of list
    let pivot = arr[Math.floor((left+right)/2)]; 

    // While there are still elements to check
    while (left <= right) {
        
        //Find left elements that should be on the right (higher than pivot)
        while (arr[left] < pivot) left++;

        //Find right elem, that should be on left
        while (arr[right] > pivot) right--;

        if (left <= right) {
            swap(arr, left, right);
            //Increment to next element to check
            left++;
            right--;
        }
        return left;
    }
}

function swap(arr, a, b) {
    let buffer = arr[a];
    arr[a] = arr[b];
    arr[b] = buffer;
}

quickSort(list, 0, list.length-1);
console.log(list);
