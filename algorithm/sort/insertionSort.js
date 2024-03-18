function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
}

const arrayToSort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = insertionSort(arrayToSort); 
console.log("Sorted array:", sortedArray);
