// Find the element's index in the sorted array using binary search alogrithm

// binarySearch([2, 3, 5, 6, 7, 9], 6) // 3
// binarySearch([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
//     13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
//     25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
//     37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
//     49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//     61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
//     73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
//     85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
//     97, 98, 99, 100], 77) 
// 76

const binarySearch = (arr, n) => {

    if (arr.length === 0) return -1;

    let start = 0, end = (arr.length - 1), middle = Math.floor((start + end) / 2);

    while (n !== arr[middle] && start <= end) {

        if (n > arr[middle]) start = middle + 1;
        else end = middle - 1;
        
        middle = Math.floor((start + end) / 2);
    }

    return n === arr[middle] ? middle : -1;

}

// const index = binarySearch([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
//     13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
//     25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
//     37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
//     49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//     61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
//     73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
//     85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
//     97, 98, 99, 100], 105)
const index = binarySearch([1, 2, 3, 4, 5, 6], 6)

console.log(index);