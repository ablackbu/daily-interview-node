const { Heap } = require('heap-js')


function findMedian(arr) {
  
    //TODO err on empty arr
    console.log(arr)
    
    const minHeap = new Heap(Heap.minComparator)
    const maxHeap = new Heap(Heap.maxComparator)
    maxHeap.push(arr[0])
    const medianArr = [arr[0]]
    
    let median = arr[0]
    for(let i = 1; i < arr.length; ++i) {
      const e = arr[i]

      //Ordering here is important because we will update the median 
      if(e < median) {
        maxHeap.push(e)
      } else  { // if (e > median) {
        minHeap.push(e)
      } //TODO add else and pick smaller size to minimize rebalancing efforts

      //Check if we need a rebalance
      while(Math.abs(minHeap.size() - maxHeap.size()) > 1) {
        //need to balance
        if(minHeap.size() > maxHeap.size()) {
          maxHeap.push(minHeap.pop())
        } else {
          minHeap.push(maxHeap.pop())
        }
      }



      if(minHeap.size() > maxHeap.size()) {
        median = minHeap.peek()
      } else if (maxHeap.size() > minHeap.size()) {
        median = maxHeap.peek()
      } else { //equal
        median = (Math.floor((minHeap.peek() + maxHeap.peek()) / 2))
      }

      medianArr.push(median)
    }

    console.log(Heap.print(minHeap))
    console.log(Heap.print(maxHeap))
    
    return medianArr
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
  
  var arr_1 = [5, 15, 1, 3];
  var expected_1 = [5, 10, 5, 4];
  var output_1 = findMedian(arr_1);
  check(expected_1, output_1);
  
  var arr_2 = [2, 4, 7, 1, 5, 3];
  var expected_2 = [2, 3, 4, 3, 4, 3];
  var output_2 = findMedian(arr_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  