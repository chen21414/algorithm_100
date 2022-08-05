//3. Longest Substring Without Repeating Characters
//https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


//https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/1597514/Javascript-Solution-using-Sliding-Window-in-O(n)-time-(w-explanation)

// The main method used for this problem is the sliding window technique. The sliding window is essentially 2 pointers that will help to keep track the start and end of a substring. 
// In this solution, this window will always contain a substring with no duplicate characters.
var lengthOfLongestSubstring = function(s) {
    var maxLength = 0 // keeps track of the current longest length of any substring in the string
    var left = 0 //start of the substring currently being tracked
    var charSet = new Set() //A set is also initialised to keep track of the elements in a substring
    //Since there are no duplicate characters in the substring (unique), a set will be a perfect tool to keep track of duplicates.
    
    // We iterate through this loop using a right pointer. As this right pointer moves, 
    // we first check if the char at the right pointer is a duplicate of any previous characters in the substring by cross checking with the set.
    for (var right = 0; right < s.length; right++){
        while (charSet.has(s[right])){ //The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.
            charSet.delete(s[left])
            left += 1
            // If the set already has the character, the set will continuously remove the leftmost char s[left] while also shifting the left pointer to the right. 
            // This will shrink the window size until there are no more duplicates characters.
        }
        charSet.add(s[right])
        // console.log('right', right)
        // console.log('left', left)
        maxLength = Math.max(maxLength, right - left + 1)
        // Once it is ensured that there are no duplicate characters, 
        // it will add the right most char s[right] to the set and update maxLength if this new substring is longer than a previous substring.
    }
    
    return maxLength
}; // Input: s = "abcabcbb"


// "right", 0
// "left", 0
// "maxLength", 1
// "right", 1
// "left", 0
// "maxLength", 2
// "right", 2
// "left", 0
// "maxLength", 3
// "right", 3
// "left", 1
// "maxLength", 3
// "right", 4
// "left", 2
// "maxLength", 3
// "right", 5
// "left", 3
// "maxLength", 3
// "right", 6
// "left", 5
// "maxLength", 3
// "right", 7
// "left", 7
// "maxLength", 3