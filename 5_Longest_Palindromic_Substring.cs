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
// Input: s = "babad"

using System;
using System.Collections.Generic;

public class Solution
{

    public static void Main(string[] args)
    {
        Console.WriteLine(LongestPalindrome(c));
    }
    public static string LongestPalindrome(string s)
    {
        if (s == "" || s.Length <= 1)
            return s;
        int length = 0, start = 0;
        for (int i = 0; i < s.Length; i++)
        {
            int evenLength = PalindromeLength(s, i, i + 1);
            int oddLength = PalindromeLength(s, i, i);
            int currentLength = Math.Max(evenLength, oddLength);

            if (currentLength > length)
            {
                length = currentLength;
                start = i - (length - 1) / 2;
            }

        }

        return s.Substring(start, length);
        //c# is taking current # for substring
        //ex: 
        // string bio = "babad";
        // Console.WriteLine(bio.Substring(1,1)); //a
    }

    private static int PalindromeLength(string s, int left, int right)
    {
        while (left >= 0 && right < s.Length && s[left] == s[right])
        {
            left--;
            right++;
        }
        return right - left - 1; // (right+1) - (left-1) - 1
    }
}

// "bab"
// ☁️ "Running fiddle"
// "substr1", "b"
// "substr2", "b"
// "substr1", "a"
// "substr2", "a"
// "substr1", "bab"
// "substr2", "bab"
// "substr1", "b"
// "substr2", "b"
// "substr1", "aba"
// "substr2", "aba"
// "substr1", "a"
// "substr2", "a"
// "substr1", "d"
// "substr2", "d"
// "bab"
