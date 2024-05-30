// Add any extra import statements you may need here


// Definition for a Node
function Node(val, children) {
  this.val = val === undefined ? 0 : val;
  this.children = children === undefined ? [] : children;
};


function countOfNodes(root, queries, string) {

  const ans = []
  while(queries.length !== 0) {
    const [subTreeId, charToFind] = queries.shift()
    const subTree = findSubTree(root, subTreeId)
    ans.push(foundNodeInTree(subTree, charToFind, string))
  }
  
  //We may want to store some results if we have similar subtrees, lets eval later
  //Need to handle for all of the queries
  //return [queries[0]].concat(countOfNodes(root, queries, string))

  return ans
}

function findSubTree(root, id) {
  if(root.val === id) {
    return root
  }

  for(let i = 0; i < root.children.length ; ++i) {
    const subRoot = findSubTree(root.children[i])
    if(subRoot) {
      return subRoot
    }
  }
}

function foundNodeInTree(root, charToFind, string) {

  console.log('>>>>> ')
  console.log(root)
  console.log(root.children.length)
  console.log(string)
  console.log(string[root.val-1])
  
  const rootVal = (string[root.val-1] === charToFind) ? 1 : 0

  if(root.children.length === 0) {
    return rootVal
  }


  let ans = rootVal
  for(let i = 0; i < root.children.length; ++i) {
    console.log('<><> NESTING INTO')
    console.log(root.children[i])
    ans+=foundNodeInTree(root.children[i], charToFind, string)
  }

  return ans


    



  //need to find the subtree

  //Once we identify the subtree then we can count

}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

// Testcase 1
var n_1 = 3, q_1 = 1;
var s_1 = "aba";
var node_1 = new Array(n_1 + 1);
for (var i = 1; i <= n_1; i++) {
  node_1[i] = new Node(i);
}
var root1 = node_1[1];
node_1[1].children = [node_1[2], node_1[3]];
var queries_1 = [[1, 'a']];
var output_1 = countOfNodes(root1, queries_1, s_1); 
var expected_1 = [2];
check(expected_1, output_1);

// Testcase 2
var n_2 = 7, q_2 = 3;
var s_2 = "abaacab";
var node_2 = new Array(n_2 + 1);
for (var i = 1; i <= n_2; i++) {
  node_2[i] = new Node(i);
}
var root2 = node_2[1];
node_2[1].children = [node_2[2], node_2[3], node_2[7]];
node_2[2].children = [node_2[4], node_2[5]];
node_2[3].children = [node_2[6]];
var queries_2 = [[1, 'a'], [2, 'b'], [3, 'a']]; 
var output_2 = countOfNodes(root2, queries_2, s_2); 
var expected_2 = [4, 1, 2];
check(expected_2, output_2); 

// Add your own test cases here
