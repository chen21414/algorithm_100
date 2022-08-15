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

//https://leetcode.com/problems/regular-expression-matching/discuss/618936/C-faster-than-98.65-less-than-25.00-Mem-O(S*P)

// Runtime: 68 ms
// Memory Usage: 24.4 MB

// O(S * P) where S is s.Length and P is p.Length


// Memoization and Bottom-up approach
// Our DP array size will be (s.length()+1) x (p.length()+1)
// This is a boolean array, where s[i][j] will store whether it’s possible to generate string s[0..i] using pattern p[0..j]. I am filling this DP array in a bottom-up manner.

// The first row and first column of the DP will correspond to the empty input string and empty pattern string respectively. You can fill the first row and first column of the boolean DP array using the base conditions explained above.

//  bool array
//  bool[] arr = new bool[5];
//       arr[0] = true;
//       arr[1] = true;
//       arr[2] = false;
//       arr[3] = true;
//       arr[4] = true;


//youtube:
//https://www.youtube.com/watch?v=l3hda49XcDE
//https://www.youtube.com/watch?v=qza1UKNHAys
//25:00
public class Solution
{

    public static void Main(string[] args)
    {
        Solution solution = new Solution();
        Console.WriteLine(solution.IsMatch("ab", ".*"));
    }
    public bool IsMatch(string s, string p)
    {
        //Console.WriteLine(p.Length); //2
        bool[,] dp = new bool[p.Length + 1, s.Length + 1];
        dp[0, 0] = true;

        for (int i = 0, x = 1; i < p.Length; i++, x++)
        {
            //when abc -> abca*, abc = abc, * times 0
            //actually when happen in first line
            if (p[i] == '*') { dp[x, 0] = dp[x - 2, 0]; }

            for (int j = 0, y = 1; j < s.Length; j++, y++)
            {
                if (p[i] == '*')
                {
                    //when p[i - 1] == s[j] || == '.', ab->ab.*, abc->abc*, abccc -> abc*
                    dp[x, y] = dp[x - 1, y] || dp[x - 2, y] || (dp[x, y - 1] && (p[i - 1] == s[j] || p[i - 1] == '.'));
                }
                else if (p[i] == s[j] || p[i] == '.')
                {
                    dp[x, y] = dp[x - 1, y - 1];
                }
            }
        }

        return dp[p.Length, s.Length];
    }
}


// Considering the size of the input string as m and size of pattern string as n.

// This solution has a space complexity of O((m+1) x (n+1)). Along with that it has a time complexity of O((m+1) x (n+1)).

// Hurrah! We are done! Thanks for devoting your time to this article. I hope you find it helpful and it gives you a clear insight into the topic.

// If you have any doubts, feel free to ask in the comment section below. If you like this blog, please share it with your friends. Your claps motivate me for writing more such blogs.

// Stay tuned for the upcoming explanatory posts by following me on medium.

// Have a good day and enjoy coding!! :D