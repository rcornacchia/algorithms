// merge-sort recursively calls itself passing in both halfs of the array
const mergeSort = (arr, start, mid, end) => {
  if (mid > start) {
    let mid = Math.floor((end+start) / 2)
    mergeSort(arr, start, mid)
    mergeSort(arr, mid+1, end)
    merge(arr, start, mid, end)
  }
}


// given two sorted arrays, merge them together
const merge = (arr, start, mid, end) => {
  let result = []
  let left = arr.slice(start, mid+1)
  let right = arr.slice(mid+1, end+1)
  let i = 0
  while (left.length || right.length) {
    console.log(result)
    console.log(right)
    console.log(left)
    if (!left.length && right.length) result.push(...right)
    if (!right.length && left.length) result.push(...left)
    console.log('test')
    (left[0] < right[0])
      ? result.push(left.pop())
      : result.push(right.pop())
  }
  return result
}

const result = merge([1, 5, 7, 2, 4, 6, 10], 0, 3, 7)
console.log(result)