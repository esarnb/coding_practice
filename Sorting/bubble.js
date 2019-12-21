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

let fullySorted = false;
while (!fullySorted) {

    //Set fullySorted to true as a trigger.
    fullySorted = true;

    //Sweep through to find unsorted elements
    for (let i = 0; i < list.length - 1; i++) {
        // If the next element is greater than current, switch them
        
        if (list[i] > list[i+1]) {
        
            //Set fully sorted to false
            fullySorted = false;
        
            //Switch higher with lower element
            let buff = list[i]
            list[i] = list[i+1];
            list[i+1] = buff;
        }
    }
}

console.log(list);
