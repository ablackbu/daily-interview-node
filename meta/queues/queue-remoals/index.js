// Add any extra import statements you may need here


// Add any helper functions you may need here

class Node {
  constructor(val, index, isMax, prevMax) {
    this.val = val
    this.isMax = isMax
    this.prevMax = prevMax
    this.index = index
  }
}

class Queue {

  constructor(arr = []) { //take in array or size
    this.queue = []
    //Exopected output does not use 0 index so we need to offset
    arr.forEach((e, i) => this.enqueue(new Node(e, i+1))) 
  }

  enqueue(node) {
    if(!this.maxNode) {//First item is our new node
      this.maxNode = node
      node.isMax = true
    } else if (this.maxNode.val < node.val) { //We have a max node
      node.isMax = true
      node.prevMax = this.maxNode
      node.prevMax.isMax = false
      this.maxNode = node
    }

    this.queue.push(node)
  }

  
  dequeueMax() {
    if(this.size() === 0) {
      throw new Error('Nothing in the queue leave me alone')
    }
    

    //Remove the max from this queue add remove max func
    let nodeToRemove = this.maxNode
    this.maxNode = this.maxNode?.prevMax
    this.queue  = this.queue.splice(nodeToRemove.index, 1) // o (n) -- maybe filter makes more sense here 
    return nodeToRemove
  }

  dequeue() {
    if(this.size() === 0) {
      throw new Error('Nothing in the queue leave me alone')
    }
    

    if(this.peek().isMax && this.size() != 1) {
      //Need to reset max before we pull everything off of it. Don't care if it's the last one
      this.maxNode = this.maxNode.prevMax
      this.maxNode.isMax = true
    }
    return this.queue.shift()
  }

  size() {
    return this.queue.length
  }

  peek() {
    return this.queue[0]
  }
}


function findPositionsQ(q, x) {

  if(q.size() === 0) {
    throw new Error('Invalid input. Queue must have some content')
  }

  if(q.size() === 1) {
    const b = q.dequeue()
    console.log(b)
    //return [q.dequeue().index]
    return [b.index]
  }
  
  const amountToEval = Math.min(q.size(), x)
  console.log('amountToEval: ' + amountToEval)
  console.log('amountToEval: ' + amountToEval)
  const queueTemp = new Queue()
  for(let i = 0; i < amountToEval; ++i) {
    console.log('>>> i ' + i)
    queueTemp.enqueue(q.dequeue())
  }

  const maxIndex = queueTemp.dequeueMax().index
  while(queueTemp.size > 0) {
    const tempNode = queueTemp.dequeue()
    tempNode.val -= tempNode.val === 0 ? 0 : 1
    q.enqueue(tempNode)
  }
  return [maxIndex].concat(findPositionsQ(q, x))

}


function findPositions(arr, x) {
  console.log('arr:' + arr)
  console.log('x:' + x)
  return findPositionsQ(new Queue(arr), x)
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

var n_1 = 6
var x_1 = 5
var arr_1 = [1, 2, 2, 3, 4, 5];
var expected_1 = [5, 6, 4, 1, 2 ];
var output_1 = findPositions(arr_1, x_1);
check(expected_1, output_1);

var n_2 = 13
var x_2 = 4
var arr_2 = [2, 4, 2, 4, 3, 1, 2, 2, 3, 4, 3, 4, 4];
var expected_2 = [2, 5, 10, 13];
var output_2 = findPositions(arr_2, x_2);
check(expected_2, output_2);

// Add your own test cases here
