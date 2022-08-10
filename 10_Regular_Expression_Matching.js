//https://leetcode.com/problems/regular-expression-matching/

// 10. Regular Expression Matching
// Hard

// 8858

// 1384

// Add to List

// Share
// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

const isMatch = (string, pattern) => {
  // early return when pattern is empty
  if (!pattern) {
    // returns true when string and pattern are empty
    // returns false when string contains chars with empty pattern
    return !string;
  }

  // check if the current char of the string and pattern match when the string has chars
  const hasFirstCharMatch =
    Boolean(string) && (pattern[0] === "." || pattern[0] === string[0]);
  // Convert a String to a Boolean using Boolean #
  // To convert a string to a boolean, pass the string as a parameter to the Boolean() object, e.g. const bool = Boolean(str).
  // The Boolean object converts the passed in string to a boolean. Empty strings get converted to false, in all other cases the result is true.

  // track when the next character * is next in line in the pattern
  if (pattern[1] === "*") {
    // if next pattern match (after *) is fine with current string, then proceed with it (s, p+2).  That's because the current pattern may be skipped.
    // otherwise check hasFirstCharMatch. That's because if we want to proceed with the current pattern, we must be sure that the current pattern char matches the char
    // If hasFirstCharMatch is true, then do the recursion with next char and current pattern (s+1, p).  That's because current char matches the pattern char.
    return (
      // pattern.slice(2) is """" two empty string
      isMatch(string, pattern.slice(2)) ||
      (hasFirstCharMatch && isMatch(string.slice(1), pattern))
    );
  }

  // now we know for sure that we need to do 2 simple actions
  // check the current pattern and string chars
  // if so, then can proceed with next string and pattern chars (s+1, p+1)
  return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false;
};

// console.log(pattern)
// ""
// ""
// ""
// true

// console.log(string)
// "aa"
// "a"
// ""
// true
