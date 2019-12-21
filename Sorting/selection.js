let list = [];

for (let i = 0; i < 10; i++) {
    list.push( parseInt((Math.random() * 100) + 1) )
}

console.log(list);

/**
 * Selection Sort
 *      Take lowest element from the entire list, 
 *      put it into the front, repeat until list is fully sorted.
*/

// Iterate through the list, look for the lowest element

// flip the new lowest element to the lowest iteration position

// Counter++ for finishing the previous. 
// while: Stop when counter == length - 1 (last elem will be largest anyway)

let lowest = 0; // The lowest element index in the list
let counter = 0; //The index to be replaced with for the next lowest element.

// Iterate through the list
while (counter < list.length) {
    for (let i = counter; i < list.length; i++) {
        if (i == 0 || list[i] < list[lowest]) lowest = i; 
    }

    let toReplace = list[counter];
    list.splice(counter, 1, list.splice(lowest, 1, toReplace).pop())
    counter++;
    lowest = counter
}
console.log(list);
