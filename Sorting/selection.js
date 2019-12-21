let list = [];

for (let i = 0; i < 10; i++) {
    list.push( parseInt((Math.random() * 100) + 1) )
}

console.log(list);

/**
 * Selection Sort (Runtime O(n^2) by for and while)
 *      Take lowest element from the entire list, 
 *      put it into the front, repeat until list is fully sorted.
*/

let lowest = 0; // The lowest element index in the list
let counter = 0; //The index to be replaced with for the next lowest element.

let toReplace = undefined; // The counter's element to switch with lowest
let dataValue = undefined; // The lowest element to switch with counter's element

// Iterate through the list
while (counter < list.length) {
    toReplace = list[counter]; // Current element to replace

    // Find lowest element in remaining (limited by i=counter) list
    for (let i = counter; i < list.length; i++) {
        if (i == 0 || list[i] < list[lowest]) lowest = i; 
    }

    // Next Lowest Element replaced by Current
    dataValue =  list.splice(lowest, 1, toReplace).pop()
    list.splice(counter, 1, dataValue) //Old Current Replaced by Lowest

    // Move on to the next lowest selection
    counter++;
    lowest = counter
}

console.log(list);
