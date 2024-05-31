const { Heap } = require('heap-js')

function findMinArray(arr, k) { 
  //o(n) * o(n log n) + o (log n) + o (1) + o (k)
  //Or O(n * 2n 2log n) => O(n*nlogn) ?? 
 
  let front = 0 //Slowly shrink our target area
  while(k > 0) { //o (n) in case the entire thing is sorted. Maybe we shortcircit this somehow? 
    const subArrEnd = Math.min(arr.length, k+1) //K+1 because a swap connnects an extra node
    const minHeap = new Heap((a, b) => a.val - b.val) // time o(n log n) space o(n)
    minHeap.init(arr.slice(front, subArrEnd).map((val, index) => { val,  index }))  //o(log n)
    const { index: minIndex } = minHeap.pop() // o(1)
    shiftToIndex(arr, front, minIndex) // o(k) across all swaps
    k-=Math.abs(minIndex-front)
    front++
  }
  return arr
}


function findMinArrayOne(arr, k) {
 
  //Probably want to optimize how we are getting the index 
  //maybe a minHeap with the
   
  let front = 0

  // of(n * 4n) => n^2
  while(k > 0) { //o (n) in case the entire thing is sorted.
    const subArrEnd = Math.min(arr.length, k+1) //K +1 because a swap connnects an extra node
    const subArr = arr.slice(front, subArrEnd) // o (subArr length)
    //This is pretty bad since we need to walk down the list to get the min, then again to get the index
    //Probably improve this to o log n by using a heap to store
    const minIndex = subArr.indexOf(Math.min(...subArr)) //o(2n)
    shiftToIndex(arr, front, minIndex) 
    k-=Math.abs(minIndex-front)
    front++
  }
  return arr
}

function shiftToIndex(arr, frontIndex, sourceIndex) {
  for(let i = sourceIndex; i > frontIndex; --i) { //o (k) max once all swaps are compelted, no addtional mem used
    let temp = arr[i-1]
    arr[i-1] = arr[i]
    arr[i] = temp 
  }
  return arr
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


var n_1 = 3, k_1 = 2;
var arr_1 = [5, 3, 1];
var expected_1 = [1, 5, 3];
var output_1 = findMinArray(arr_1, k_1);
check(expected_1, output_1);

var n_2 = 5, k_2 = 3;
var arr_2 = [8, 9 ,11, 2, 1];
var expected_2 = [2, 8, 9, 11, 1];
var output_2 = findMinArray(arr_2, k_2);
check(expected_2, output_2);

// Add your own test cases here
