// 2. Add Two Numbers
// Medium

// 20228

// 4035

// Add to List

// Share
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
//https://leetcode.com/problems/add-two-numbers/

//https://leetcode.com/problems/add-two-numbers/discuss/442354/C-Resursive-Simple-Solution


// Input: l1 = [2,4,3], l2 = [5,6,4]
//ListNode is something like this
// class ListNode {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
// }

public class ListNode {

  public int[] l1 = new int[] { 2,4,3 };
  public int[] l2 = new int[] { 5,6,4 };

  public ListNode(int[]l1, int[]l2) {
    this.l1 = l1;
    this.l2 = l2;
  }

   public ListNode AddTwoNumbers(ListNode l1, ListNode l2,int carry = 0) {
       if(l1 == null && l2 == null && carry == 0) return null; 
       if(l1 == null && l2 == null && carry == 1) return new ListNode(1);
       
        var s1 = l1 != null ? l1.val : 0;
        var s2 = l2 != null ? l2.val : 0;
        
        var s = s1 + s2 + carry;
        
        var sumNode = new ListNode(s % 10);
        sumNode.next = AddTwoNumbers(l1?.next,l2?.next, s / 10 );
        return sumNode;
    }

}


// What is the difference between a list and an array in C#? 
// An array stores a fixed-size sequential collection of elements of the same type, whereas list is a generic collection.



//solution#2
//🚀🚀C# Solution || Iterative || Fast || Simple || Intuitive || Well Explained
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */


public class ListNode {
      public int val;
      public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
         this.val = val;
         this.next = next;
     }
}
public class Solution
{

    public static void Main(string[] args)
    {
		
		ListNode<int[]> theArray1 = { 1, 2, 3}; //problem
		ListNode<int[]> theArray2 = { 4, 5, 6};
    Console.WriteLine(AddTwoNumbers(theArray1,theArray2));
    }
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
    {
        ListNode result = new ListNode();
        ListNode head = result;
        int sum = 0;
        while (l1 != null || l2 != null || sum > 0) // to keep running if we hava a value in l1, l2 or carry
        {
            // two if statments because l1 and l2 can be of different sizes
            if (l1 != null)
            {
                sum += l1.val;
                l1 = l1.next;
            }
            if (l2 != null)
            {
                sum += l2.val;
                l2 = l2.next;
            }
            result.next=new ListNode(sum % 10); //digit
            sum /= 10; //carry
            result = result.next;
        }
        return head.next; //we don't want to return head as it will add a node=0 at the start so -> wrong answer
    }
}