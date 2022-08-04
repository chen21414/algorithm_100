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


//solution#1 using Java
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

//import java.util.HashMap;
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hashMap = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            if(!hashMap.containsKey(target - nums[i])){
                hashMap.put(nums[i], i);
            } else {
                int[] result = {i, hashMap.get(target - nums[i])}; //hashMap.get(target - nums[i]) is to get key
                return result;
            }
        }
    return null;
    }
}


//3: 0
//2: 1

//result
//[1, 2]


//solution#2 using c#

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        var map = new Hashtable();
        for (int i = 0; i < nums.Length; i++)
        {
            if (map.ContainsKey(target - nums[i]))
            {
                return new int[] { (int)map[target - nums[i]], i };
            }
            map[nums[i]] = i;
        }
        return new int[0];
    }
}


//{3: 0}
//{2: 1}

//[1, 2]