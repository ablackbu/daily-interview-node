const { Heap } = require('heap-js')

/*
//TODO impl own MinHeap
class MinHeap {

    size = 0

    insert(val) {
        size++
    }

    remove() {
        size--
    }

}*/


function findMaxProduct(arr) {

    if(arr.length < 3) {
        throw new Error('Invalid input')
    }

    //We know we will always have 3 and we can quickly determine with no thought the first 3 values
    const ans = [-1, -1, (arr[0]* arr[1] * arr[2])]
    const minHeap = new Heap(Heap.minComparator) //Defaults to min but I don't like not being explit here
    minHeap.init([arr[0], arr[1], arr[2]])
    console.log(Heap.print(minHeap))

    for(let i = 3; i < arr.length; ++i) {
        //minHeap.push(arr[i]) //We have 4 in there
        //minHeap.pop() //Throw away the smallest
        minHeap.pushpop(arr[i])//this lib can use pushpop to do push & pop faster
        
        const [a, b, c] = minHeap.top(3) //can use top or bottom here since we only have 3
        ans.push(a*b*c)
    }

    return ans

    //Trivial approach
    //memory for the 3 largest 
    //max_a
    //max_b
    //max_c

    //when a new number comes in we check if we should replace any of them
    //then multiple for the values
    //If not all values are defined we return -1

    //heap might be better for this. 
    
    //Max heap we can push numbers onto for each i then pop the top 3 off, 
    //multiple and add them abck
    //This would cause the heap to grow to n
    
    //if we push them on to a min heap we can do the same but pop 4 off,
    //the first is discarded as the smallest, then we multiple the remaining 3, store it
    //and push them back into the min heap
    
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
  
  var arr_1 = [1, 2, 3, 4, 5];
  var expected_1 = [-1, -1, 6, 24, 60];
  var output_1 = findMaxProduct(arr_1);
  check(expected_1, output_1);
  
  var arr_2 = [2, 4, 7, 1, 5, 3];
  var expected_2 = [-1, -1, 56, 56, 140, 140];
  var output_2 = findMaxProduct(arr_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  