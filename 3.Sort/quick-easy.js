function quickSort (array) {
  if (array.length <= 1) return array

  const pivot = array[0]
  const less = array.slice(1).filter(el => el < pivot)
  const greater = array.slice(1).filter(el => el > pivot)

  return quickSort(less).concat(pivot, quickSort(greater))
}