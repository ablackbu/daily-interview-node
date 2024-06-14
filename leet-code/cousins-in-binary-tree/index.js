/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class Node {
  constructor(val) {
      this.val = val
      this.left = null
      this.right = null
  }
}

/**
* @param {TreeNode} root
* @param {number} x
* @param {number} y
* @return {boolean}
*/
var isCousins = function(root, x, y) {
  const results = []
  dfs(root, x, y, 0, null, results)
  return (results[0].depth === results[1].depth) && (results[0].parent !== results[1].parent)
}
 

var dfs = function(root, x, y, depth, parent, results) {
  depth++

  if(!root) {
      return
  }

  if(root.val === x) {
      results.push({
          depth,
          parent
      })
  }

  if(root.val === y) {
      results.push({
          depth,
          parent
      })
  }

  dfs(root.left, x, y, depth, root, results)
  dfs(root.right, x, y, depth, root, results)
}

