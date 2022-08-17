// 15. 3Sum
// Medium

// 20341

// 1919

// Add to List

// Share
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.


// This was one of my first medium problems, and as such, I had trouble understanding what would be expected of a solution. After working on Two Sum and Two Sum II, I was expecting to need to find a linear-time solution to this problem.

// But when I looked up the solutions, the point was made by multiple authors and instructors that since this has an added dimension for the sums (using three numbers instead of two), a quadratic-time solution here is perfectly acceptable.

// Since we're allowed to present an O(n^2) solution, we get a really valuable tool: we can sort the input array without impacting the overall runtime.

// Sorting takes O(logn) time, and O(n^2logn) is acceptably fast, since log(n) won't impact the greater, quadratic time in our worst cases. If we can sort the input list, we can solve this problem using a similar technique to the two sum problem. With a sorted list, we can also easily avoid duplicate entries. Here's how it all works out at a high level:

// We sort the input array from low to high
// With a sorted input list, we can iterate through the array and see if each value + a second value + a third value equals zero. We don't have to look backwards, because we will have already checked each preceding value.
// We can also skip duplicates, because we can check if nums[i - 1] === nums[i], which would tell us that we've already tried with this value
// Once our value at nums[i] is greater than 0, we can stop our search, because no three positive integers will ever equal 0.
// For each negative value in the sorted array, we check its right-hand side neighbors to see if value + first number + second number === 0. If so, we add that to some top-level result array as a triplet that satisfies the condition.

// With all that said, let's illustrate this in JavaScript:

var threeSum = function(nums) {
  // First, let's sort the array. 
  // This gives us two benefits: 
  // 1. We can avoid duplicates, because skipping duplicate values in a sorted array is trivial (check if the prior value === current value)
  // 2. We can stop once we hit positive values, because no three positive values can be added to reach 0
  //
  // Finally, it's OK to sort, because we accept a quadratic runtime here,
  // and adding an O(logn) sort operation won't make that any worse
  nums.sort((a, b) => {
    return a - b
  })

  // With a sorted array, let's initialize a result array, which we'll use to hold our triplets
  const result = []

  // Now, loop through the sorted input array
  for (let i = 0; i < nums.length; i++) {

    // And if the number is greater than zero, 
    // that means the only have positive integers left in the sorted array,
    // and three positive integers will never equal 0,
    // so we're done with the input and can break.
    if (nums[i] > 0) {
      break;
    }

    // At each iteration, we want to make sure we skip duplicates,
    // so check that the prior number doesn't equal the current number.
    if (i > 0 && nums[i - 1] === nums[i]) {
      // If they're the same, skip this iteration
      continue;
    }

    // With the prior conditions satisfied, 
    // we can be certain we're looking at negative integers.
    // In which case, we want to find two integers further down the array, such that all three integers added together equals 0.
    //
    // Now we solve this with two pointers, which is how we would solve Two Sum II.
    // We use the sorted nature of the array to hone in on values that will equal zero.
    // 
    // Start the left pointer at the current index + 1, and the right pointer at the end of the array
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      // Calculate the sum
      const sum = nums[i] + nums[left] + nums[right]

      // Check if the sum is equal to 0
      // if so, push nums[i], nums[left], and nums[right] to our top level result array
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])

        // Then, increment the left pointer and the right pointer, 
        // to see if there are any additional triplets that satisfy the conditions.
        left++
        right--

        // Also make sure we increment the left pointer past any possible duplicates
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      } else if (sum < 0) {
        // If the sum is less than zero, we want to see if we can increase it to hit zero. 
        // With a sorted input array, we can attempt this by incrementing the left pointer, 
        // to look at bigger numbers.
        left++
      } else {
        // Otherwise, sum is greater than zero, and we should try decreasing the sum, by decrementing the right pointer
        right--
      }
    }
  }

  return result
};