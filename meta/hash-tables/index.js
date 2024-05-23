// Add any extra import statements you may need here


// Add any helper functions you may need here


function numberOfWays(arr, target) {
  // Write your code here
  console.log(arr)
  console.log(target)
  
  //I think I have to go through everything once o(n) since we are unsorted
  let answer = 0
  const hashMap = {}
  arr.forEach(e => {
    hashMap[e] = hashMap[e] ? hashMap[e] + 1 : 1
  })

  console.log(hashMap)


  Object.entries(hashMap).forEach(([k, v]) => {
    if(v > 0) { //We have some occurance of this value so we need to do something
      const index = target-Number(k)
      const mate = hashMap[index]
      if(mate) {
        //We found a mate we need to decrease the mate and the lower of the two 
        if(index === k) {
          //This follows a pettern n(n-1)/2 
          hashMap[index] = 0
          answer += v * (v-1) / 2
        } else {
          decrementAmt = Math.min(mate, v)
          hashMap[index] -= decrementAmt
          hashMap[k] -= decrementAmt
          answer += decrementAmt
        }
      }
    }
  })
  

  return answer
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

var k_1 = 6;
var arr_1 = [1, 2, 3, 4, 3];
var expected_1 = 2;
var output_1 = numberOfWays(arr_1, k_1);
check(expected_1, output_1);

var k_2 = 6;
var arr_2 = [1, 5, 3, 3, 3];
var expected_2 = 4;
var output_2 = numberOfWays(arr_2, k_2);
check(expected_2, output_2);

// Add your own test cases here
