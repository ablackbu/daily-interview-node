// Add any extra import statements you may need here


// Add any helper functions you may need here


function getTotalTime(arr) {
  //sort arr min -> max
  arr.sort((a, b ) => a - b) //Double check this is doing min to max may need to swap a and b
  //o (n log n) time, 
  //o (log (n)) space

  let penaltyTotal = 0
  while(arr.length >= 2) {
     const penalty = arr.pop() + arr.pop() // o(1) + o(1)
     penaltyTotal+=penalty 
     arr.push(penalty) // o(1) - since we are never getting a larger than the input we don't have a dynamic array growth penalty
  }
  return penaltyTotal
  
  //If we invert this we can get better time complexity since removing from the list would be faster

  //while we have at least 2 items
  //grab last 2, merge them and start over
  
  
  
  

  
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  var out = '[' + n + ']';
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
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [4, 2, 1, 3];
var expected_1 = 26;
var output_1 = getTotalTime(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 3, 9, 8, 4];
var expected_2 = 88;
var output_2 = getTotalTime(arr_2);
check(expected_2, output_2);

// Add your own test cases here
