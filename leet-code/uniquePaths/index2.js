/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

  if(!obstacleGrid[0] || obstacleGrid[0].length === 0) {
    return 0
  }

  //obstacleGrid[0][0] = where I am
  if(obstacleGrid[0][0] === 1) {
      //Invalid path
      return 0
  }


  if(obstacleGrid.length === 1 && obstacleGrid[0].length === 1) {
      return 1
      //We need to make sure there are no blockers so can't short circuit like uniquePaths 1
  }

  //TODO make a cache for speed 

  const obGrid1 = obstacleGrid.slice(1)
  const obGrid2 = obstacleGrid.map(item => item.slice(1))
  //console.log(obGrid1)
  //console.log(obGrid2)

  return uniquePathsWithObstacles(obGrid1) + uniquePathsWithObstacles(obGrid2)
};


const grid = [[0,0,0],[0,1,0],[0,0,0]]
console.log(uniquePathsWithObstacles(grid))