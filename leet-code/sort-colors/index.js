/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    var swap = function(arr, i, j) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    const MID_VAL = 1; //Target value for middle
    
    //These represent where the start, middle, and end indicies extend to
    let startIndex = 0; // relative to the start of nums
    let midIndex = 0; // relative to the start of nums
    let endIndex = nums.length - 1; // relative to the end of nums

    while(midIndex <= endIndex) { //Once the midpoint and the endpoint intersect there is nothing left to do
        if(nums[midIndex] < MID_VAL) { //Goes at the front
            swap(nums, midIndex, startIndex)
            startIndex++
            midIndex++
        } else if (nums[midIndex] > MID_VAL) { //Goes at the end
            swap(nums, midIndex, endIndex)
            endIndex--
            //We don't adjust mid here because we haven't checked it yet, next iteration will
        } else { //In the right spot
            midIndex++
            
        }
    }
};

