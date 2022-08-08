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

//https://leetcode.com/problems/reverse-integer/discuss/250597/C-Solution-using-unchecked-beats-100-40ms
// This is a C# solution using a foor loop to organize the loop control variables.
// I used the unchecked keyword to allow overflow. If the new push value doesn't match the original value then we have detected overflow and we can return 0.

public class Solution
{
    public int Reverse(int x)
    {
        int reversed = 0;
        for (int pop = 0, push = 0; x != 0; x /= 10)
        {
            //https://dotnettutorials.net/lesson/checked-and-unchecked-keyword/
            unchecked
            {
                pop = x % 10; //2
                push = reversed * 10 + pop; //2
                if ((push - pop) / 10 != reversed)
                    return 0;
                reversed = push;//2
            }
        }
        return reversed;
    }
}
// We "pop" a value by removing it using the % operator. If we do % 10 then we'll always get the number in the single digits.

// We "push" a value by multiplying the current reversed integer by 10, this effectively shifts everything to the left 1 digit, then we add the recently "popped" value into the singles digit.

// We can move onto the next value by dividing the value by 10, this cuts off the rightmost digit.


//better in explanation
public class Solution2
{
    public int Reverse(int x)
    {
        if (x < 10 && x > -10)
            return x;

        var lastResult = 0;
        var result = 0;
        while (x != 0)
        {
            lastResult = result;
            result = result * 10 + x % 10;
            Console.WriteLine(result);
            x /= 10;
            Console.WriteLine("x:" + x);
        }

        if (result / 10 != lastResult)
            return 0;
        return result;
    }
}


// 3
// x:12
// 32
// x:1
// 321
// x:0
// 321