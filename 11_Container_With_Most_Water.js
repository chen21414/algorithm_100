// https://leetcode.com/problems/container-with-most-water/

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1


// Before we go on, we need to look at the given test cases, and make some facts up to start writing our code:

// We can see that the area of the container is limited by the smallest side, so we need to know what the smallest side is every iterations
// The area of a container is (right - left) multiplied by the smallestSide.
// If the area is greater than our result, we have a new result
// When moving the left or right pointer, we want to get rid of the smaller side, so iterate from that side
// With this we can do the problem in O(n) time and constant space by having a left and right pointer, and moving these pointers inward.

//looking for max area
const maxArea = (height) => {
	let result = 0,
		left = 0,
		right = height.length - 1;

	while (left < right) {
    console.log('height[left]', height[left])
    console.log('height[right]', height[right])

		let smallestSide = Math.min(height[left], height[right]);
    console.log('smallestSide', smallestSide)

		let area = (right - left) * smallestSide;
    console.log('area', area)

		if (area > result) result = area;

		if (height[left] < height[right]) left++;
		else right--;
    console.log('left', left)
    console.log('right', right)
	}

	return result;
};


// "left", 1
// "right", 8
// "left", 1
// "right", 7
// "left", 1
// "right", 6
// "left", 1
// "right", 5
// "left", 1
// "right", 4
// "left", 1
// "right", 3
// "left", 1
// "right", 2
// "left", 1
// "right", 1


// "height[left]", 1
// "height[right]", 7
// "smallestSide", 1
// "area", 8
// "height[left]", 8
// "height[right]", 7
// "smallestSide", 7
// "area", 49
// "height[left]", 8
// "height[right]", 3
// "smallestSide", 3
// "area", 18
// "height[left]", 8
// "height[right]", 8
// "smallestSide", 8
// "area", 40
// "height[left]", 8
// "height[right]", 4
// "smallestSide", 4
// "area", 16
// "height[left]", 8
// "height[right]", 5
// "smallestSide", 5
// "area", 15
// "height[left]", 8
// "height[right]", 2
// "smallestSide", 2
// "area", 4
// "height[left]", 8
// "height[right]", 6
// "smallestSide", 6
// "area", 6