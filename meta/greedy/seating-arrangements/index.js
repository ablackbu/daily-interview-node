

function minOverallAwkwardness(arr) {

  //Process.
  //Initial thought was to toss this into a heap, 
  //then pop things out assigning them to a left and right array
  //then construct them together and make our seating arangement
  //Once that's done then we simply count deltas
  //This has the problem of lots of wasted operations
  //Upon writing this down I noticed the array manip pattern

  

  //My selected solution sorts an array
  //observing the pattern heap would pop things off
  //and how that relates to the the index of the sorted array we notice the pattern that 
  //Adjacent patners are 
  // - arr[i] arr[i+1]
  // - arr[i] arr[i+2]
  //We can ignore when we get to the upperbound because the out of bounds were checked on previous iterations
  
  arr.sort((a, b) => a - b) // o (n log n)

  let maxAwk = 0
  for(let i = 0; i < arr.length-2; ++i) { // o (n)
    const delta1 = Math.abs(arr[i] - arr[i+1]) //This is your left buddy
    const delta2 = Math.abs(arr[i] - arr[i+2]) //This is your right buddy
    maxAwk = Math.max(maxAwk, delta1, delta2)
  }

  //Can skip this since it's not actually needed
  //Final value doesn't have delta2, rather than check each iteration I just handle the edge here
  //const finalDelta = arr[arr.length-2] - arr[arr.length-1]
  //maxAwk =  Math.max(maxAwk, finalDelta)

  return maxAwk
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

var arr_1 = [5, 10, 6, 8];
var expected_1 = 4;
var output_1 = minOverallAwkwardness(arr_1);
check(expected_1, output_1);

var arr_2 = [1, 2, 5, 3, 7];
var expected_2 = 4;
var output_2 = minOverallAwkwardness(arr_2);
check(expected_2, output_2);

// Add your own test cases here
