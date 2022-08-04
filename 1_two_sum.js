// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]



//Answer:
// he easiest way is nested loop, but it's time complexity is not that good.
// So we must use other way to get the answer (Hash, dictionary ...)

// ⭐https://zyrastory.com/en/coding-en/leetcode-en/leetcode-1-two-sum-solution-and-explanation-en/⭐
// ⬆To see other languages please click the link above⬆

// Example : JavaScript Code (using Map to store the value and index)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Input: nums = [3,3], target = 6
// Output: [0,1]
var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0 ; i < nums.length ; i++){
        var n = nums[i];
        console.log('n', n)
        console.log('map',Object.keys(map))

        if(map[target-n] >= 0){
            return [map[target-n],i]
        } 
        else {
            map[n] = i;   //use map to store the value and index position
        }
    }
};


// "n", 3, index at 0
// "map", []
// "n", 3
// "map", ["3"]

// [0, 1]



// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0 ; i < nums.length ; i++){
        var n = nums[i];
        console.log('n', n)
        console.log('map key',Object.keys(map))
        console.log('map', map)
        if(map[target-n] >= 0){
            return [map[target-n],i]
        } 
        else {
            map[n] = i;   //use map to store the value and index position
        }
    }
};

console.log(twoSum(nums, target))

// "n", 3
// "map key", ["3"]
// "map", {
//   3: 0
// }

// "n", 2
// "map key", ["2", "3"]
// "map", {
//   2: 1,
//   3: 0
// }

// "n", 4 ([target - n] = [2], [2] is 1 which is >= 0, i is now 2 )
// "map key", ["4", 2", "3"]
// "map", {
//   4: 2,
//   2: 1,
//   3: 0
// }
// [1, 2]