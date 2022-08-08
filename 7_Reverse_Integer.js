//https://leetcode.com/problems/reverse-integer/

// 7. Reverse Integer
// Medium

// 7859

// 10340

// Add to List

// Share
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

//https://leetcode.com/problems/reverse-integer/discuss/969722/JavaScript-solution-94-83-(no-reverse-string)
function reverse(x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  let ret = 0;
  while (x > 0) {
    const num = x % 10; //3, 2, 1
    x = Math.floor(x / 10); //12, 1, "0"
    ret *= 10; //0, 30, 320
    ret += num; //3, 32, "321"
  }
  if (ret > Math.pow(2, 31)) return 0;
  return isNegative ? ret * -1 : ret;
}
