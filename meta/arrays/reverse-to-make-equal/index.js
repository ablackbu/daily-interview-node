// Add any extra import statements you may need here


// Add any helper functions you may need here


function areTheyEqual(array_a, array_b){

  if(array_a.length !== array_b.length) {
      //If we aren't the same length then we can never do it so should exit there
    return false;
  }
  
  const cache = {}
  for(let i =  0; i < array_a.length; ++i) {
    const keyA = array_a[i]
    const keyB = array_b[i]
    if(keyA !== keyB) {
      //We don't want to waste time adding and removing if we don't have to 
      cache[keyA] = cache[keyA] ? cache[keyA] + 1 : 1
      cache[keyB] = cache[keyB] ? cache[keyB] - 1 : -1
    }
  }
      
  //If store only has 0s we are true, else false 
  return Object.values(cache).filter((v) => v !== 0).length === 0
  
  //Next step is we are filtering values at the end which is kind of slow. 
  //Might be nice to simpply remove from the cache inline when they would be remade to zero. . Then no more filtering is required.
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

var array_a_1 = [1, 2, 3, 4];
var array_b_1 = [1, 4, 3, 2];
var expected_1 = true;
var output_1 = areTheyEqual(array_a_1, array_b_1); 
check(expected_1, output_1); 

var array_a_2 = [1, 2, 3, 4];
var array_b_2 = [1, 4, 3, 3];
var expected_2 = false;
var output_2 = areTheyEqual(array_a_2, array_b_2); 
check(expected_2, output_2); 

// Add your own test cases here
