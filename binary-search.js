// given a sorted array of integers return the index of the given key or -1 if not found.

function binarySearch(arr, key, start, end) {
  if (!start || !end) {
    start = 0
    end = arr.length-1
  }
  if (start - end == 0) {
    if (arr[start] = key) return start
    else return -1
  }

  const midIndex = Math.floor((end - start) / 2)
  let mid = arr[midIndex]
  console.log(mid)
  console.log(midIndex)

  if (mid == key) return midIndex

  if (mid > key) {
    binarySearch(arr, key, start, midIndex-1)
  } else {
    binarySearch(arr.slice(midIndex+1, arr.length), key)
  }
}

const a = [1, 5, 8, 9, 19, 199, 390]
console.log(binarySearch(a, 5))