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

// set the lowest element to the front

// Counter++ for finishing the previous. 
// while: Stop when counter == length - 1 (last elem will be largest anyway)

let lowest = 0, counter = 0;
while (counter < list.length) {
    for (let i = counter; i < list.length; i++) {
        if (i == 0 || list[i] < list[lowest]) lowest = i; 
    }

    list.unshift(list.splice(lowest, 1).pop())
    counter++;
    lowest = counter
}
console.log(list);
