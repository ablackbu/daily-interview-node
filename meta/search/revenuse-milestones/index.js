// Add any extra import statements you may need here


// Add any helper functions you may need here


function getMilestoneDays(revenues, milestones) {
  // Write your code here
  console.log('rev: ' + revenues)
  console.log('ms: ' + milestones)
  
  const sumTargets = Array(revenues.length).fill(0)
  sumTargets[0] = revenues[0] //We know the first one has the initial sum. We also don't have to ask everytime
  for(let i = 1; i < revenues.length; ++i) { //We use a for loop because forEach doesn't specificy order guarantees
    sumTargets[i] += sumTargets[i-1] + revenues[i]
    //We could mututate the input to keep memory down but I don't love that since this function name doesn't indicate any mutation
  }
  
  console.log('st: ' + sumTargets)

  /*
  return milestones.map((goal) => {
    //Also flawed if we have a target that isn't equal since we need the exact one Lets improve
    return sumTargets.indexOf(goal) //This is a pain point because it is o(n), Could improve by doing bin search but since we are still doing 
  })*/
  
    const findIndexOfMilestone = (arr, m) => {
      //Starter values       
      let leftBound = 0
      let rightBound = arr.length-1

      while(true) {
        const midPoint = leftBound + Math.floor((rightBound - leftBound)/2)
        const delta = rightBound - leftBound
        console.log('mid: ' + midPoint)
        console.log('delta: ' + delta)

        if(delta === 0) {
          //This is the last item it is either valid or we have no solution
          return arr[midPoint] >= m ? midPoint : false
        }
             
        if(arr[midPoint] === m) { //Exact match
          console.log('exact match')
          return midPoint
        } else if(arr[midPoint] < m ) {
          //Move up
          leftBound = midPoint + 1 
          //rightBound doesn't change
        } else {
          //Move down
          //leftBound doesn't change
          //Normally the right bound would shrink in but since we need to keep the value if it goes over. target of 100 if there is nothing >99 and < 110 then the next 
          rightBound = midPoint
        }
      }
    }
    
    const convertIndexToDay = (i) =>  i ? i + 1 : -1
  
    return milestones.map((goal) => convertIndexToDay(findIndexOfMilestone(sumTargets, goal)))
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

var revenues_1 = [100, 200, 300, 400, 500];
var milestones_1 = [300, 800, 1000, 1400]
var expected_1 = [2, 4, 4, 5];
var output_1 = getMilestoneDays(revenues_1, milestones_1);
check(expected_1, output_1);

var revenues_2 = [700, 800, 600, 400, 600, 700];
var milestones_2 = [3100, 2200, 800, 2100, 1000];
var expected_2 = [5, 4, 2, 3, 2];
var output_2 = getMilestoneDays(revenues_2, milestones_2);
check(expected_2, output_2);

// Add your own test cases here
