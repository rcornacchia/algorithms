// given a sorted array of integers return the index of the given key or -1 if not found.

function binarySearch(arr, key, start=0, end=arr.length-1) {


  const midIndex = Math.floor((end + start) / 2)
  const mid = arr[midIndex]

  if (mid == key) return midIndex
  if (start - end == 0) {
    return -1
  }

  if (mid > key) {
    return binarySearch(arr, key, start, midIndex-1)
  } else {
    return binarySearch(arr, key, midIndex + 1, end)
  }
}

const a = [1, 5, 8, 9, 19, 199, 390]

console.log(binarySearch(a, 1))   // 0
console.log(binarySearch(a, 5))   // 1
console.log(binarySearch(a, 9))   // 3
console.log(binarySearch(a, 199)) // 5
console.log(binarySearch(a, 15))  // -1