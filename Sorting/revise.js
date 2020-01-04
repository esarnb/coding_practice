let list = []; // Unsorted list

function randomize(arr) {
    arr.length = 0;
    for (let i = 0; i < 10; i++) {
        list.push( parseInt((Math.random() * 100) + 1) )
    }
    console.log(`Random: ${arr}`);
    
}

function flip(arr, a, b) {
    let buff = arr[a];
    arr[a] = arr[b];
    arr[b] = buff
}

randomize(list)

function bubbleSort(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i]>arr[i+1]) {
                flip(arr, i, i+1);
                sorted = false
            }
        }
    }
}

bubbleSort(list);
console.log(list);
randomize(list)



function selectionSort(arr) {
    let lowest = 0

    for (let i = 0; i < arr.length - 1; i++) {
        lowest = i+1
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) lowest = j;
        }
        flip(arr, i, lowest)
    }
}

selectionSort(list);
console.log(list);
randomize(list)


function mergeSort(arr, buff, low, high) {
    if (low < high) {
        let mid = Math.floor((low+high)/2)
        mergeSort(arr, buff, low, mid)
        mergeSort(arr, buff, mid+1, high)
        mergeBoth(arr, buff, low, mid, high)
    }
    
}
function mergeBoth(arr, buff, low, mid, high) {
    // copy array
    for (let i = low; i <= high; i++) {
        buff[i] = arr[i];
    }

    // make 2 indexes and current main arr index
    let left = low;
    let right = mid+1;
    let curr = low;

    //while in bounds
    while (left <= mid && right <= high) {
        // if left < right index, put lowest to main list
        if (buff[left] < buff[right]) {
            arr[curr] = buff[left];
            left++;
        }
        else {
            arr[curr] = buff[right];
            right++;
        }
        curr++;
    }

    //group remaining left-points after current main index
    let remain = mid-left
    for (let i = 0; i <= remain; i++) {
        arr[curr + i] = buff[left + i];
    }
}

mergeSort(list, [], 0, list.length-1);
console.log(list);
randomize(list)


function quickSort(arr) {
    let pivot = Math.floor(arr.length / 2);

    quickSort(arr, 0, pivot)
    quickSort(arr, pivot+1, arr.length)
    
}

selectionSort(list);
console.log(list);
randomize(list)


