// Add any extra import statements you may need here


// Add any helper functions you may need here

const bracketMap = {
  '(': ')',
  '{': '}',
  '[': ']'
}

function isOpen(c) {
  return bracketMap[c]
} 

function isBalanced(s) {
  if(s.length === 0) {
    return true
  }
  
  let stack = []
  for(let i = 0; i < s.length; ++i) {
    const char = s[i]
    if(isOpen(char)) {
      stack.push(char)
    } else {
      if(bracketMap[stack.pop()] != char) {
        return false
      }
    }
  }

  return stack.length === 0
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

var s_1 = "{[(])}";
var expected_1 = false;
var output_1 = isBalanced(s_1);
check(expected_1, output_1);

var s_2 = "{{[[(())]]}}";
var expected_2 = true;
var output_2 = isBalanced(s_2);
check(expected_2, output_2);

// Add your own test cases here
