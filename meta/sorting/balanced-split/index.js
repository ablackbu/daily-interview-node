// Add any extra import statements you may need here


// Add any helper functions you may need here

class NodeTracker {
  constructor(startingIndex, startingVal) {
    this.index = startingIndex
    this.max = startingVal
    this.min = startingVal
    this.value = startingVal
  }
  
  add(n, indexDelta) {
    if(n > this.max) {
      this.max = n
    }

    if(n < this.min) {
      this.min = n
    }

    this.value += n
    this.index += indexDelta
  }
  
  dump(prefix) {
    console.log(`${prefix} index: ${this.index} min: ${this.min} max: ${this.max}  val: ${this.value} `)
  }
}


function balancedSplitExists(arr) {
  arr = arr.sort((a, b) => a - b)
  
  const left = new NodeTracker(0, arr[0])
  const right = new NodeTracker(arr.length-1, arr[arr.length-1])

  //[ 1, 2, 2, 5 ]
  //index: 0 max: 1 val: 1 
  //index: 3 max: 5 val: 5 

  const offset = arr.length%2 === 0 ? 1 : 0
  while(left.index < right.index - offset) { //We remove one from the upper bound because we don't want them to overlap

    left.dump('L >>')
    right.dump('R >>')

    if(left.max >= right.min) {
      //short circuit here if max overlaps
      return false
    }

    
    if(left.value <= right.value) {
      left.add(arr[left.index+1], 1)
    } else {
      right.add(arr[right.index-1], -1)
    }
  }


  left.dump('END L >>')
  right.dump('END R >>')
  return left.value === right.value
  
      

  
  //sort my list by low to high 
  //get start and end of list 

  //while there is space between left and right  -> && max item for each side doesn't intersect -- short circuit chance ?
  // if delta is positive move lower end in and add and update max lower
  // if delta is negative move upper end in  and add and update max upper
  
  
  // o (n) but could short circuit and be faster 
  
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printString(str) {
  var out = '["' + str + '"]';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [2, 1, 2, 5];
var expected_1 = true;
var output_1 = balancedSplitExists(arr_1); 
check(expected_1, output_1); 

var arr_2 = [3, 6, 3, 4, 4];
var expected_2 = false;
var output_2 = balancedSplitExists(arr_2); 
check(expected_2, output_2); 

// Add your own test cases here
