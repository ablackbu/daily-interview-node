// Add any extra import statements you may need here


// Add any helper functions you may need here


function countDistinctTriangles(arr) {
  //Go through eacyh item in the list and sort them
  //After sorting inset into a set
  //Count size of set
  const sorted = arr.map(triArr => triArr.sort((a, b) => a - b).join(','))
  const set = new Set(sorted)
  return set.size
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

var arr_1 = [[7, 6, 5], [5, 7, 6], [8, 2, 9], [2, 3, 4], [2, 4, 3]];
var expected_1 = 3;
var output_1 = countDistinctTriangles(arr_1);
check(expected_1, output_1);

var arr_2 = [[3, 4, 5], [8, 8, 9], [7, 7, 7]];
var expected_2 = 3;
var output_2 = countDistinctTriangles(arr_2);
check(expected_2, output_2);

// Add your own test cases here
