//https://leetcode.com/problems/string-to-integer-atoi/

// 8. String to Integer (atoi)
// Medium

// 2081

// 6057

// Add to List

// Share
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.

// Example 1:

// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// The parsed integer is 42.
// Since 42 is in the range [-231, 231 - 1], the final result is 42.
// Example 2:

// Input: s = "   -42"
// Output: -42
// Explanation:
// Step 1: "   -42" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -42" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -42" ("42" is read in)
//                ^
// The parsed integer is -42.
// Since -42 is in the range [-231, 231 - 1], the final result is -42.
// Example 3:

// Input: s = "4193 with words"
// Output: 4193
// Explanation:
// Step 1: "4193 with words" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
//              ^
// The parsed integer is 4193.
// Since 4193 is in the range [-231, 231 - 1], the final result is 4193.

//#1 lazy and slower solution (but useful ins js)
//https://leetcode.com/problems/string-to-integer-atoi/discuss/4671/Javascript-%22seriously%22-code

var myAtoi = function (str) {
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);
};

//#2 regular and official solution
// Observe there is no reference to built-in javascript methods parseInt and Number to convert the string to an integer, as this would defeat the purpose of the problem
// I used a regex str[i].match(/[0-9]/) to check if a character is a number, that's just a preference
// Updated Notes

// 2021-09-22: A simple dictionary lookup might be a more exact solution to replace this line: const num = str[i] - '0' Thanks @TomCaserta
// 2021-09-22: I'm not sure why the official solution was removed (at least I think there was an official solution)
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (str) {
  let i = 0;
  let sign = 1;
  let result = 0;

  //Discard whitespaces in the beginning
  while (i < str.length && str[i] == " ") i++;

  // Check if optional sign if it exists
  if (i < str.length && (str[i] == "+" || str[i] == "-")) {
    sign = str[i] == "-" ? -1 : 1;
    i++;
  }

  const MAX_SAFE_32_INT = Math.pow(2, 31) - 1;
  const MIN_SAFE_32_INT = -Math.pow(2, 31);

  // Build the result and check for overflow/underflow condition
  // Simply put, overflow and underflow happen when we assign a value that is out of range of the declared data type of the variable. If the (absolute) value is too big,
  // we call it overflow, if the value is too small, we call it underflow.
  while (i < str.length && str[i].match(/[0-9]/) != null) {
    const num = str[i] - "0";
    // the second condition of this statement was hard to understand, it
    // handles the situation where we are reaching our 32-bit boundary limit, and we need to check the very last digit.
    if (
      result > Math.floor(MAX_SAFE_32_INT / 10) ||
      (result === Math.floor(MAX_SAFE_32_INT / 10) &&
        num > MAX_SAFE_32_INT % 10)
    ) {
      return sign === 1 ? MAX_SAFE_32_INT : MIN_SAFE_32_INT;
    }

    // times 10 is a shift-left action
    result = result * 10 + num;
    i++;
  }

  return result * sign;
};
