// Add any extra import statements you may need here


// Add any helper functions you may need here


function findEncryptedWord(s) {
  console.log(s)
  //Improvement, move this to a situation where s is an array so we don't convert over and over
  return findEncryptedWordArr(s.split(""))
}

function findEncryptedWordArr(sArr) { 
  if(sArr.length === 1) {
    return sArr[0]
  }

  if(sArr.length === 2) {
    return sArr[0] + sArr[1]
  }

  const targetIndex = Math.floor((sArr.length-1)/2)
  const newStart = sArr.slice(0, targetIndex)
  const newEnd = sArr.slice(targetIndex+1)
  const extractedVal = sArr[targetIndex]
  console.log(`ns: ${newStart} val: ${extractedVal} nd: ${newEnd} targetIndex: ${targetIndex} `)
  return extractedVal + findEncryptedWordArr(newStart) + findEncryptedWordArr(newEnd)
  //space is going to be o(2 ^ n)
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

var s_1 = "abc";
var expected_1 = "bac";
var output_1 = findEncryptedWord(s_1);
check(expected_1, output_1);

var s_2 = "abcd";
var expected_2 = "bacd";
var output_2 = findEncryptedWord(s_2);
check(expected_2, output_2);

// Add your own test cases here
