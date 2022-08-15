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
  // The Boolean object converts the passed in string to a boolean. "Empty strings get converted to false, in all other cases the result is true."

  // track when the next character * is next in line in the pattern
  if (pattern[1] === "*") {
    // if next pattern match (after *) is fine with current string, then proceed with it (s, p+2).  That's because the current pattern may be skipped.
    // otherwise check hasFirstCharMatch. That's because if we want to proceed with the current pattern, we must be sure that the current pattern char matches the char
    // If hasFirstCharMatch is true, then do the recursion with next char and current pattern (s+1, p).  That's because current char matches the pattern char.
    return (
      // pattern.slice(2) is """" two empty string
      isMatch(string, pattern.slice(2)) ||
      (hasFirstCharMatch && isMatch(string.slice(1), pattern)) //this otherwise if pattern[1] !== "*"
    ); //keep recursive until both pattern and string are empty
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

//JavaScript Clean Bottom-Up DP Tabulation
function secondSolution() {
  var isMatch = function (s, p) {
    const dp = Array.from({ length: s.length + 1 }, () => [false]);
    dp[0][0] = true;

    //EX:
    //const dp = Array.from({ length: 4 }, () => [false]);
    //console.log(dp) // [[false], [false], [false], [false]]

    // fill first row
    for (let i = 1; i <= p.length; i++) {
      if (p[i - 1] === "*") dp[0][i] = dp[0][i - 2];
      else dp[0][i] = false;
    }

    for (let r = 1; r <= s.length; r++) {
      for (let c = 1; c <= p.length; c++) {
        if (p[c - 1] === "*") {
          if (p[c - 2] === s[r - 1] || p[c - 2] === ".") {
            dp[r][c] = dp[r][c - 2] || dp[r - 1][c];
          } else dp[r][c] = dp[r][c - 2];
        } else if (p[c - 1] === s[r - 1] || p[c - 1] === ".") {
          dp[r][c] = dp[r - 1][c - 1];
        } else dp[r][c] = false;
      }
    }
    return dp[s.length][p.length];
  };
}
