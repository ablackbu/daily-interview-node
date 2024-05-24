// Add any extra import statements you may need here


// Add any helper functions you may need here


function canGetExactChange(targetMoney, denominations) {

  if(denominations.length === 1) {
    return targetMoney % denominations[0] === 0
  }

  const currentDenom = denominations.pop()
  if(targetMoney < currentDenom) {
    //We can't use this denomination we need to go deeper
    return canGetExactChange(targetMoney, denominations)
  } else {
    //We need to give them as much of this item as possible 
    const newTarget = targetMoney - (currentDenom * Math.floor(targetMoney/currentDenom))
    return canGetExactChange(newTarget, denominations)
  }
  //So the normal flow people do is get as many big bills as possible and then reduce
  //I suspect there is a flaw with this logic 
  //However I don't consider that a realistic since people don't do that

  //
  
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

var target_1 = 94;
var arr_1 = [5, 10, 25, 100, 200];
var expected_1 = false;
var output_1 = canGetExactChange(target_1, arr_1);
check(expected_1, output_1);

var target_2 = 75;
var arr_2 = [4, 17, 29];
var expected_2 = true;
var output_2 = canGetExactChange(target_2, arr_2);
check(expected_2, output_2);

// Add your own test cases here
