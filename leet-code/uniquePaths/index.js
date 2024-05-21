/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths1 = function(m, n) {
  //Thought process:
 //Is there a pattern we can determine from this 
 //First we can go all the way right and all down
 //Second we can go all the way down and all right 
 // Only time the above isn't true is if we m or n = 1
 if(m == 1 || n == 1) {
     return 1
 }


 //Since we kind of already have a base case lets treat this recursively 
 let shrinkM = uniquePaths(m-1, n)
 let shrinkN = uniquePaths(m, n-1)
 return shrinkM + shrinkN
};

//uniquePathsCache
var uniquePaths = function(m, n, cache = {}) {
if(m == 1 || n == 1) {
 return 1
}

const key = `${m}-${n}`
if(cache[key]) {
 return cache[key]
}

//Since all entries are between 1 and 100 it would probably make most sense to precompute and simply store the values in a table rather than figure it out each time
cache[key] = uniquePaths(m-1, n, cache) + uniquePaths(m, n-1, cache)
return cache[key]
};