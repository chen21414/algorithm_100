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


//https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/2338675/CJavaPython3-JavaScript-Solutions-(easy)

using System;
using System.Collections.Generic;
public class Solution {

    public static void Main(string[] args)
    {
        Console.WriteLine(LengthOfLongestSubstring("abcabcbb"));
    }
    public static int LengthOfLongestSubstring(string s) {
        
        if(string.IsNullOrEmpty(s))
        {
            return 0;
        }

        HashSet<char> hSet = new HashSet<char>();
        int max = 0;
        int i = 0;
        int j = 0;
        
        while(i<s.Length)
        {
            if(!hSet.Contains(s[i]))
            {
                hSet.Add(s[i]);
                i++;
                
            }
            else
            {
                max = Math.Max(max,hSet.Count);
                hSet.Remove(s[j]);
                j++;
            }
        }
        max = Math.Max(max,hSet.Count);
        return max;
        
    }
}