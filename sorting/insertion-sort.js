const insertionSort = arr => {
  console.log(arr)
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = key
    console.log(arr)
  }
  return arr
}

const unsorted = [5, 3, 8, 9, 2, 1, 7]
const sorted = insertionSort(unsorted)
console.log(sorted)
