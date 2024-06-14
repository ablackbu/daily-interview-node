/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {

  //sort arr1 first, this will ensure the iteratable on map will be in order
  arr1.sort((a, b) => a - b)
  
  //turn arr1 counts into a map with counts
  const map = new Map()
  for(e of arr1) {
      map.set(e, map.has(e) ? map.get(e) + 1 : 1)
  }

  //iterate through arr2
  //get item from map and add to output array n times where n is the count
  let output = []
  for(e of arr2) {
      if(map.has(e)) {
          output = output.concat(new Array(map.get(e)).fill(e))
      }
      map.delete(e)
  }

  //iterate over everything left in the array and append it to the output array
  for([key, value] of map) {
      const stuffToAdd = new Array(value).fill(key)
      output = output.concat(new Array(value).fill(key))
  }

  return output
};