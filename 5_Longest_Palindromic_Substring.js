//https://leetcode.com/problems/longest-palindromic-substring/


// Given a string s, return the longest palindromic substring in s.
//a word, phrase, sentence, or number that reads the same backward or forward 
 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:

// Input: s = "cbbd"
// Output: "bb"


// Second Solution - Optimized:
// For each char in str, consider it were the middle, then try to expand the substring as long as left and right sides are equal

var longestPalindrome = function (s) {
      let res = '';
      for(let i = 0; i < s.length; i++){
          // Odd - if there is only 1 char in the middle, like 'bob'
          let lOdd = i, rOdd = i;
          expandAroundCenter(lOdd, rOdd)
          //Even - 2 chars in the middle, like 'kbbk'
          let lEven = i, rEven = i + 1;
          expandAroundCenter(lEven, rEven);
      }
    // helper
      function expandAroundCenter(left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
          let subStr = s.substring(left, right + 1);
          if(subStr.length > res.length){
            res = subStr;
          }
          left--;
          right++;
        }
      }
      return res;
};