import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  const labManualText = `Department of Computer Science & Engineering
LAB MANUAL
HP - 22 Computer Programming - 2
Student Name Sanskar Chaudhary
Email sanskar1484.be22@chitkarauniversity.e
du.in
Course Name HP - 22 Computer Programming - 2
Faculty Incharge
______________
Table of Contents
S.No. Aim Pages
1 Swap two variables
2 Swap two variables without using a third variable
3 Sum of all the digits of a number
4 Form a number
5 Compare reverse and original number
6 Sum of a set of numbers
7 Counting
8 Generate Prime numbers
9 Add one to each digit of a number
10 Prime factors of a number
11 Greatest Common divisor of two integers
12 Square root of a number
13 Binary To Decimal Conversion
14 Three Consecutive
15 Factorial using recursion
16 Sum of all the digits using recursion
17 Prime factors using recursion
18 power(base, exp)
19 Form a new number
6
7
8
9
10 - 11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
20 Binary equivalent using recursion
21 Greatest common divisor using recursion
22 Second Maximum in an Array
23 Cut the sticks
24 Kth largest number
25 Maximum Frequency in a sequence Incorrect Answer
26 Merge two Arrays
27 Find all pairs with sum K
28 Find first occurrence of an integer in a sorted list
with duplicates
29 Find count of a number in a sorted list with duplicates
30 Rotation count of a sorted Array
31 Search element in a rotated sorted array
32 Find Missing Element
33 Find the number of swaps in Bubble Sort
34 Find the number of swaps in Selection Sort
35 Find the numbers of shifts in Insertion sort
36 Sort an array using merge sort
37 Sort an array using quick sort
38 Matrix Multiplication
39 Row or Column sum
26
27
28 - 29
30 - 32
33
34
35 - 36
37 - 38
39 - 40
41
42 - 43
44
45 - 46
47 - 48
49 - 50
51 - 52
53
54 - 55
56 - 57
40 Spirally traversing a matrix
41 Rotate a 2-D array by 90 degrees
42 Implement strcmp function
43 Implement strcat function
44 Implement atoi and itoa functions
45 Unique characters or not
46 String is palindrome or not
47 Reverse a string
48 Implement strstr function
49 String at end or not
50 Reduce the given sequence
51 Technical Issue With The Keyboard
52 Count words
53 Reverse the words of a string
54 Reverse the order of words of a string
55 String is subsequence or not
56 Implement strtok function
57 Spell the number
58 Sort the strings lexicographically
59 Check if strings are rotations or not
60 Count the set bits of a number
58 - 59
60 - 61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76 - 77
78 - 79
80
81
82
61 Toggle the number except kth bit
62 Find the odd man out
63 Find the two strange elements
64 Saving the Earth with Binary Fever
65 Which flight to take
66 Calculate the Total amount to be given
67 Calculate the nextdate of a given date
68 Print the lines from file
69 Capitalize First Letter of every Word in a File
70 Compare two Files, print the location of first byte that
they differ
71 Count No of Lines & Blank Lines in a given text file
72 Append the Content of File at the end of Another file
73 Delete a specific Line from a Text File
74 Reverse the Content of File and Print it
75 Implement the stack using array
76 Reverse a string using stack
77 Implement the queue using array
78 Reverse a given queue
79 Reverse first N elements of a given queue
83
84 - 85
86
87 - 88
89 - 90
91 - 92
93 - 94
95 - 96
97
98
99 - 100
101
102 - 103
104 - 105
106 - 107
108
109 - 110
111
112
Aim: Swap two variables
Write a program to swap the value of two variables.
Input
Each test case will have 2 elements in two different lines between 0 - 9999.
Output
For each input case, swap the input values of the variables.
Sample Input
10
20
Sample Output
20
10
Solution:
#include <stdio.h>
/* Include other headers as needed */
int main()
{
 int a,b,c;
 scanf("%d %d",&a,&b);
 c=a;
 a=b;
 b=c;
 printf("%d\n%d",a,b);
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
6
Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Swap two variables without using a third variable
Write a program to swap the value of two variables without using a third variable.
Input Format:
Each test case will have 2 elements in two different lines between 0 - 9999.
Output Format:
For each input case, swap the input values of the variables.
Sample Input
10
20
Sample Output
20
10
Solution:
#include <stdio.h>
/* Include other headers as needed */
int main()
{
 int a,b;
 scanf("%d %d",&a,&b);
 a=a+b;
 b=a-b;
 a=a-b;
 printf("%d\n%d",a,b);
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
7
Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Sum of all the digits of a number
Write a program to find the sum of all the digits of a number.
Input
First line of input will contain a number N = number of test cases. Next N lines will contain
number n as test case where 0<=n<=9999.
Output
For each input case, calculate and print sum of its digits.
Sample Input
4
1234
456
12
1
Sample Output
10
15
3
1
Solution:
#include <stdio.h>
/* Include other headers as needed */
int main()
{
 int n,t,sum;
 scanf("%d",&t);
 while(t--){
 scanf("%d",&n);
 sum = 0;
 while(n!=0){
 sum=sum+n%10;
 n=n/10;
 }
 printf("%d\n",sum);
 }
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
8
Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Form a number
Write a function formNumber() that reads in a set of n single digits and convert them into a
single integer.
Input Format:
First line of input will contain a number n (number of single digit number) where n<=5. Next
n lines will contain n single digit numbers.
Output Format:
For each input case, this function should convert the single digits into a single integer and
return to the calling function.
Sample Input 1
5
2
7
5
9
3
Sample Output 1
27593
Sample Input 2
3
1
2
0
Sample Output 2
120
Solution:
#include <stdio.h>
int main(){
 // Write your code here
 int t,n,end=0,i=0;
 scanf("%d",&t);
 while(i<t){
 scanf("%d",&n);
 end=end*10+n;
 i++;
 } printf("%d\n",end);
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
9
Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Compare reverse and original number
Given an integer n, the task is to print 'Equal' if the integer is palidrome integer, else print '
Not Equal'
An integer is a palindrome when it reads the same backward as forward. For example,
121 is palindrome while 123 is not.
Input Format:
First line of input will contain a number N = number of test cases.
Next N lines will contain number n as test case where 0<=n<=9999.
Output Format:
For each input case, compare reverse and original number and print “Equal” if they are equal
and “ Not Equal” otherwise.
Sample Input
6
1234
456
12
1
0045
0
Sample Output
Not Equal
Not Equal
Not Equal
Equal
Not Equal
Equal
Solution:
#include<stdio.h>
int main()
{
 int num, orig, rem,a;
 int i=0;
 scanf("%d",&a);
 for(i;i<a;i++){
 scanf("%d", &num);
 orig = num;
 int rev=0;
 while(num!=0)
 {
 rem = num%10;
 rev = (rev*10)+rem;
 num = num/10;
 }
 if(orig==rev)
 printf("Equal\n");
 else
 printf("Not Equal\n");
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
10 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 }
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
11 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Sum of a set of numbers
Given a set of n numbers , write a program to add these numbers and return the resultant
sum.
Input Format:
First line of input of each test case will contain a number N = number of elements in the set.
Next N lines will contain number n where n>=0.
Output Format:
For each input case, sum and print the all the numbers.
Sample Input
5
1
2
3
4
5
Sample Output
15
Solution:
#include <stdio.h>
/* Include other headers as needed */
int main()
{
int i,n,x,s=0;
 scanf("%d",&n);
 for(i=0;i<n;i++){
 scanf("%d",&x);
 s=s+x;
 }
 printf("%d",s);
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
12 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Counting
Given a set of n students examination marks ( in the range 0 to 100) make a count of the
number of students that passed the examination. A pass is awarded for all marks of 50 and
above.
Input
First line of input of each test case will contain a number N = number of subjects. Next N
lines will contain number n as marks where 0<=n<=100
Output
For each input case, count and print the number of students passed the examination.
Sample Input
5
95
12
67
0
50
Sample Output
3
Solution:
#include <stdio.h>
/* Include other headers as needed */
int main()
{
int n,i,x,j=0;
 scanf("%d",&n);
 for(i=0;i<n;i++){
 scanf("%d",&x);
 if(x>=50){
 j=j+1;
 }
 }
 printf("%d",j);
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
13 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Generate Prime numbers
Write a program to generate and print all the primes in the first n positive integers.
Input
Each test case will contains a single integer n where n >=2.
Output
For each input case, generate and print all the primes in the first n positive integers.
Sample Input
10
Sample Output
2
3
5
7
Solution:
#include <stdio.h>
/* Include other headers as needed */
int main()
{
 int n;
 scanf("%d",&n);
 int i,j;
 for (i=1;i<=n;i++){
 for (j=2;j<i;j++){
 if(i%j==0){
 break;
 }
 }
 if(i==j){
 printf("%d\n",i);
 }
 }
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
14 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Add one to each digit of a number
Write a program to add one to each digit of a number.
Input
First line of input will contain a number N = number of test cases. Next N lines will contain
number n as test case where 1<=n<=99999.
Output
For each input case, add one to each digit of n, and print the new number.
Sample Input
3
1239
9999
19
Sample Output
2350
11110
30
Solution:
#include <stdio.h>
/* Include other headers as needed */
int main()
{
 int cse,num,temp=0,count=0,add=0;
 scanf("%d",&cse);
 for(int i=0;i<cse;i++)
 {
 count=0;
 scanf("%d",&num);
 temp=num;
 while(temp!=0)
 {
 count++;
 temp=temp/10;
 }
 add=0;
 for(int i=0;i<count;i++)
 {
 add=add*10 + 1;
 }
 num=num+add;
 printf("%d\n",num);
 }
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
15 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Prime factors of a number
Given an integer n, print all the prime factors of n.
For example, n = 15, its prime factors are 3 and 5
Complete the function primeFactors() given in the editor, that accepts an integer parameter
n and prints all the prime factors of n.
Input Format
The input consists of an integer,n
Constraints
2<=n<=10^5
Output Format
Print all the prime factors of n, in new lines
Sample Input
24
Sample Output
2
2
2
3
Solution:
/*
 * Complete the function 'primeFactors'
 * Print all the prime factors of the number
 * @params
 * n -> numbers whose prime factors are to be found
 */
void primeFactors(int n){
 scanf("%d",&n);
 int i;
 for(i=2;n>1;i++)
 {
 while(n%i==0)
 {
 printf("%d\n",i);
 n=n/i;
 }
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
16 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Greatest Common divisor of two integers
The greatest common divisor (GCD) of two or more integers, is the largest positive integer
that divides each of the integers.
For example, the GCD of 8 and 12 is 4.
Given 2 numbers , your task is to find out the GCD of the numbers.
Complete the function gcd() that accepts two positive non-zero integer parameters i and j and
returns the greatest common divisor of these numbers.
Input Format
First line of input contains the first number, i
Second line of input contains the first number, j
Constraints
1 <= i,j <= 100000
Output Format
Print the gcd of two numbers
Sample Input
30
18
Sample Output
6
Solution:
/*
 * Complete the function 'gcd'
 * @params
 * i -> first integer
 * j -> second integer
 *
 * @returns
 * an integer, denoting the gcd of i and j
 */
int gcd(int i, int j){
 int x;
 for(int k=1;k<=i;k++){
 if(i%k==0&&j%k==0){
 x=k;
 }
 }
 return x;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
17 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Square root of a number
Given a number n, devise an algorithm to compute its square root.
Input Format:
First line will contain T=number of test case, next T lines will contains an integer n where n
>=1.
Output Format:
For each test case, calculate and print the square root of n with 2 decimal places (Round to
nearest numbers e.g. 4.472 to 4.47 & 3.157 to 3.16) in new lines.
There should be no space after each element.
Sample Input
6
36
16
9
20
1
11
Sample Output
6.00
4.00
3.00
4.47
1.00
3.32
Solution:
#include <stdio.h>
/* Include other headers as needed */
int main()
{
 int T;
 scanf("%d",&T);
 for(int i=1;i<=T;i++){
 float n,root;
 scanf("%f",&n);
 root=sqrt(n);
 printf("%.2f\n",root);
 }
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
18 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Binary To Decimal Conversion
Binary Number System is the simplest kind of number system that uses only two digits of 0
and 1 (i.e. value of base 2). All the computers & digital electronics understand binary
number system.
Now given a string consisting of digits '0' & '1', the task is to find the decimal equivalent of
the number represented in the binary string.
Complete the function binaryToDecimal that accepts a binary string parameter whose digits
are meant to represent binary (base-2) digits, and returns an integer of that number's
representation in decimal (base-10).
For example, the call of binaryToDecimal("101011") should return 43.
Input Format:
The first line of input contains the number of testcases,T
Then T lines follow, each line contains a string, which represents a binary number
Output Format
Print the corresponding decimal number for each testcase in a new line
Constraints:
1 <= T <= 10
It is guaranteed that the decimal number formed from the binary string will be in the range of
a 32-bit integer
Do not use any built-in base conversion functions from the system libraries.
Sample Input
1
101011
Sample Output
43
Explanation:
The given binary representation is 101011,
It's decimal conversion will be 1*(2^0) + 1*(2^1) + 0*(2^2) + 1*(2^3) + 0*(2^4) + 1*(2^5)
Which will be 1 + 2 + 0 + 8 + 0 + 32 = 43
Solution:
int binaryToDecimal(char binary[]) {
 // Write your code here
 int a=0,b=0,c=0,j=0;
 for(int i=0;i<50;i++){
 if(binary[i]==48 || binary[i]==49)
 c++;
 else
 break;
 }
 for(int i=c-1;i>=0;i--){
 if(binary[i]==48)
 a=0;
 else
 a=1;
 b=b+a*pow(2,j);
 j++;
 }
return b;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
19 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Three Consecutive
Write a method threeConsecutive(int a,int b,int c) that accepts three integers as parameters
and returns 1 if they are three consecutive numbers ( i.e if the numbers can be arranged into
an order such that their values differ by exactly 1 ) otherwise return 0.
For example, the call of ThreeConsecutive(3, 2, 4) would return 1.
Input Format:
The first line of input contains number of testcases , T.
Then T lines follow, which contains 3 integers seperated by a space.
Output Format
For each testcase print 1 if the the numbers are consecutive , else print 0
Sample Input
2
1 3 2
1 4 7
Sample Output
1
0
Solution:
int threeConsecutive(int a, int b, int c)
{
 if((a+1==b && b+1==c) || (a+1==c && c+1==b) || (b+1==a && a+1==c) || (c+1==a &&
a+1==b))
 return 1;
 else
 return 0;
 }
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
20 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Factorial using recursion
Write a recursive function factorial that accepts an integer n as a parameter and returns the
factorial of n, or n!.
A factorial of an integer is defined as the product of all integers from 1 through that integer
inclusive. For example, the call of factorial(4) should return 1 * 2 * 3 * 4, or 24. The
factorial of 0 and 1 are defined to be 1.
You may assume that the value passed is non-negative and that its factorial can fit in the
range of type int.
Input Format:
The first line of input contains number of testcases , T.
Then T lines follow, which contains an integer,n.
Output Format:
For each testcase print the factorial in new line
Sample Input
2
4
3
Sample Output
24
6
Solution:
/*
 * Complete the function 'factorial' given below
 * @params
 * n -> an integer whose factorial is to be calculated
 * @return
 * The factorial of integer n
 */
int factorial(int n) {
 // Write your code here
 if(n==0)
 {
 return 1;
 }
 return factorial(n-1)*n;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
21 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Sum of all the digits using recursion
Write a recursive function sumOfDigits that accepts an integer as a parameter and returns
the sum of its digits. For example, calling sumOfDigits(1729) should return 1 + 7 + 2 + 9,
which is 19. If the number is negative, return the negation of the value. For example, calling
sumOfDigits(-1729) should return -19.
Constraints: Do not declare any global variables. Do not use any loops; you must use
recursion. Also do not solve this problem using a string. You can declare as many primitive
variables like ints as you like. You are allowed to define other "helper" functions if you like;
they are subject to these same constraints.
Solution:
int sumOfDigits(int n)
{
 if(n==0)return 0;
 return n%10 + sumOfDigits(n/10);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
22 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Prime factors using recursion
Write a program that accepts an integer n (where n >=2) and print all the prime factors of n
using recursion.
Sample Input
24
Sample Output
2
2
2
3
Constraints : Do not declare any global variables. Do not use any loops; you must use
recursion. You can declare as many primitive variables like ints as you like. You are allowed
to define other "helper" functions if you like; they are subject to these same constraints.
Solution:
#include <stdio.h>
void prime(int no,int i)
{
 if(no==1)
 {
 return;
 }
 if(no%i==0)
 {
 printf("%d\n",i);
 prime(no/i,i);
 }
 else
 {
 prime(no,++i);
 }
}
int main()
{
 int no;
 scanf("%d",&no);
 prime(no,2);
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
23 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: power(base, exp)
Write a recursive function power that accepts two integers representing a base and an
exponent, and returns the base raised to that exponent. For example, the call to power(3, 4)
should return 3^4 i.e. 81. If the exponent passed is negative, then return -1.
Do not use loops or auxiliary data structures; Solve the problem recursively. Also do not use
the provided library pow function in your solution.
Expected Time Complexity: O(log(n)); here n denotes the exponent
Input Format:
The first line of input conatins an integer T, denoting the number of test cases.
The second line of input contains 2 integers base and exponent seperated by space.
Output Format:
Print the answer when base is raised to the exponent.
Constraints:
-10 <= base <= 10
þÿ-15 <= exponent <= 15
Sample Input
2 // Test Cases
2 3
5 2
Sample Output
8
25
Solution:
long power(int base, int exp) {
 // Write your code here
 static int b=1;
 int res =0;
 if(exp<0)
 {
 return -1;
 }
 if(exp==0)
 {
 res =b;
 b=1;
 return res;
 }
 if(exp%2==1)
 {
 b = b*base;
 return power(base*base,exp/2);
 }
 else
 {
 power(base*base,exp/2);
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
24 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Form a new number
Write a recursive function evenDigits that accepts an integer parameter n and returns a new
integer containing only the even digits from n, in the same order. If n does not contain any
even digits, return 0.
For example, the call of evenDigits(8342116) should return 8426 and the call of
evenDigits(35179) should return 0.
Solution:
int evenDigits(int n)
{
 int r;
 if(n==0)
 {
 return 0;
 }
 r = n%10;
 if(r%2==0)
 {
 return r + evenDigits(n/10)*10;
 }
 else
 evenDigits(n/10);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
25 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Binary equivalent using recursion
Write a recursive function decimalToBinary that accepts an integer as a parameter and
returns an integer whose digits look like that number's representation in binary (base-2). For
example, the call of decimalToBinary(43) should return 101011.
Constraints: Do not use a string in your solution. Also do not use any built-in base
conversion functions from the system libraries. solve the problem recursively.
Sample Input :
1 // no. of testcases
43
Sample Output :
101011
Solution:
int decimalToBinary(int n)
{
 int rem =0;
 if(n==0) return 0;
 else
 {
 rem = n%2;
 return rem + decimalToBinary(n/2)*10;
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
26 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Greatest common divisor using recursion
Write a recursive function gcd that accepts two positive non-zero integer parameters i and j
and returns the greatest common divisor of these numbers.
Sample Input
2 // Test Cases
30 18 // i j (testcase 1)
11 17 // i j (testcase 2)þÿ
Sample Output
6
1
Constraints:. Solve the problem recursively.
Solution:
int gcd(int i, int j)
{
 if(j==0) return i;
 else
 return gcd(j,i%j);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
27 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Second Maximum in an Array
Write a program to find the 2nd maximum element in an array.
Note: Print 0, if all the values are same.
Input Format:
The first line of input contains an integer N, denoting the size of array.
The second line contains N space separated integers, denoting the array elements.
Constraints:
 2 <= N <= 10^5
 -1000 <= arr[i] <= 1000
Output Format:
For each test case, print the 2nd maximum element in the list.
Sample Input 1
5
30 210 100 40 70
Sample Output 1
100
Sample Input 2
5
40 -20 50 40 10
Sample Output 2
40
Solution:
#include <stdio.h>
/* Include other headers as needed */
int main()
{
 int size,secmax,pos=0;
 scanf("%d",&size);
 int arr[size];
 for(int i=0;i<size;i++)
 {
 scanf("%d",&arr[i]);
 }
 int max=arr[0];
 for(int i=0;i<size;i++)
 {
 if(arr[i]>0 || arr[i]<0)
 {
 for(int j=i+1;j<size;j++)
 {
 if(arr[i]==arr[j])
 {
 arr[j]=0;
 }
 }
 }
 }
 for(int i=0;i<size;i++)
 {
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
28 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 if(arr[i]>max)
 {
 max=arr[i];
 pos=i;
 }
 }
 arr[pos]=-40;
 secmax=arr[0];
 for(int i=0;i<size;i++)
 {
 if(arr[i]>secmax)
 {
 secmax=arr[i];
 }
 }
 printf("%d",secmax);
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
29 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Cut the sticks
Given an array, lengths, of N stick lengths (where each length is a positive integer), a cut
operation reduces the length of each stick in the array by the length of the array's shortest
stick. A stick can only be cut if it has a length "e 1.
Complete the cutSticks() function which has 3 parameters:
Size of the array (lengths_size).An integer array of stick lengths (lengths). Pointer to the
variable which is used to store the size of the result array.
Your function must perform cut operations on lengths until every stick length is reduced to 0
and return an integer array, where ith element of the array denotes the individual sticks cut
during the ith operation.
Your function must return an integer array, where ith element of the array denotes the
individual sticks cut during the ith operation.
Input Format
First line contains an integer i.e. N denoting number of sticks.
Next N lines, contains an integer each denoting the length of ith stick.
Output Format
Print the number of sticks which have a cut during ith cut operation in new lines.
þÿSample Input 1
6
5
4
4
2
2
8
Sample Output 1
6
4
2
1
Explanation 1
|lengths| = 6, lengths = {5, 4, 4, 2, 2, 8}
Cut Operation 1: The smallest length in lengths is 2, so the cut length for this cut operation is
2.
 After cutting (reducing) each stick in lengths by 2, lengths1 = {3, 2, 2, 0, 0, 6} and
we print 6 (the number of sticks cut during the cut operation) on a new line.
Cut Operation 2: The smallest length in lengths1 = {3, 2, 2, 0, 0, 6} is 2, so the cut length for
this cut operation is 2.
 After cutting (reducing) each stick in lengths1 by 2, lengths2 = {1, 0, 0, 0, 0, 4}
and we print 4(the number of sticks cut during the cut operation) on a new line.
Cut Operation 3: The smallest length in lengths2 = {1, 0, 0, 0, 0, 4} is 1, so the cut length for
this cut operation is 1.
 After cutting (reducing) each stick in lengths2 by 1, lengths3 = {0, 0, 0, 0, 0, 3}
and we print 2(the number of sticks cut during the cut operation) on a new line.
Cut Operation 4: The smallest length in lengths3 = {0, 0, 0, 0, 0, 3} is 3, so the cut length for
this cut operation is 3.
 After cutting (reducing) each stick in lengths3 by 3, lengths4 = {0, 0, 0, 0, 0, 0}
and we print 1(the number of sticks cut during the cut operation) on a new line.
At this point, there are no more sticks to be cut and we cease performing cut operations.
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
30 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Sample Input 2
8
1
2
3
4
3
3
2
1
Sample Output 2
8
6
4
1
Solution:
/*
 * Complete the function below.
 * Please store the size of the int array to be returned in result_size pointer. For example,
 * int a[3] = {1, 2, 3};
 * *result_size = 3;
 * return a;
 *
 */
int* cutSticks(int lengths_size, int *lengths, int *result_size)
{
 int temp[20]={0},min;
 int c,a=0,flag;
 for(int k=0;k<lengths_size;k++)
 {
 flag=0;
 c=0;
 min = 100;
 for(int i=0;i<lengths_size;i++)
 {
 if(lengths[i]<min && lengths[i]>0)
 min = lengths[i];
 }
 for(int j=0;j<lengths_size;j++)
 {
 if(lengths[j]>0)
 {
 flag=1;
 lengths[j] = lengths[j]-min;
 c++;
 }
 }
 temp[a]=c;
 if(flag==1)
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
31 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 a++;
 }
 for(int i=0;i<a;i++)
 {
 lengths[i] = temp[i];
 }
 *result_size = a;
 return lengths;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
32 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Kth largest number
Given a method called kthLargest that accepts an integer k and an array arr as its
parameters and returns the element such that k elements have greater or equal value. If k = 0,
return the largest element; if k = 1, return the second largest element, and so on.
For example, if the array passed contains the values {74, 85, 102, 99, 101, 56, 84} and the
integer k passed is 2, your method should return 99 because there are two values at least as
large as 99 (101 and 102).
Expected Time Complexity: O(N)
Assume that 0 <= k < length of array.
Input Format
First line contains the number of test cases i.e. T
Each test case T contains the integer K (In first line), the number of elements in array N (In
2nd line) and N array integers in the next line.
Output Format
Print the kth largest number from array.
Constraints
 0 <= K < N
 1 <= N <= 10^5
 -(10^9) <= arr[i] <= 10^9
Sample Input
1 // Test cases
1 // K
4 // Size of Array
8 5 6 3 // Elements of Array
Sample Output
6
Solution:
int kthLargest(int arr[], int size, int k) {
 // Write your code here
 for(int i=0;i<size;i++)
 {
 for(int h=i;h<size-1;h++)
 {
 if(arr[i]<arr[h+1])
 {
 int temp;
 temp = arr[h+1];
 arr[h+1] = arr[i];
 arr[i] = temp;
 }
 }
 }
 return arr[k];
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
33 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Merge two Arrays
Write a function mergeArrays which should merge two sorted arrays to create one single
sorted array.
Complete the function int* mergeArrays(int a[], int b[] , int asize, int bsize) below which
takes pointers to the first element of the two sorted arrays & the size of the arrays and return
the base address of the final sorted array.
Sample Input
4 // Size of 1st array
1 2 3 6 // Elements of 1st array
3 // Size of 2nd array
4 5 7 // Elements of 2nd array
Sample Output
1
2
3
4
5
6
7
Solution:
int * mergeArrays(int a[], int b[], int asize, int bsize)
{
 int j=0;
 for(int i=asize;i<(asize+bsize);i++)
 {
 a[i]=b[j];
 j++;
 }
 int total=asize+bsize,temp=0;
 for(int i=0;i<total;i++)
 {
 for(int j=i+1;j<total;j++)
 {
 if(a[j]<a[i])
 {
 temp=a[i];
 a[i] = a[j];
 a[j] = temp;
 }
 }
 }
return a;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
34 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Find all pairs with sum K
Given a sorted list of N integers, find all distinct pairs of integers in the list with sum equal to
a given number K, with O(n log n) or O(n) time complexity.
Complete the function below which takes the array and K as parameters and return the
number of pairs if any and 0 otherwise.
Input Format:
First line of input will contain a positive integer T = number of test cases. Each test case will
contain 2 lines.
First line of each test case contains two integers - N and K.
Next line will contain N numbers separated by space in non-decreasing order.
Constraints:
1 "d T "d 10
1 "d N "d 10^5
-(10^9) "d arr[i], K "d 10^9
Output Format:
For each test case, print number of distinct pairs whose sum will be equal to k. A pair must
have two numbers at different indices.
Two pairs are different if at least one of the indices in them is uncommon. Indices - (2,3) and
(3,2) are not distinct, but (2,3) and (2,4) are.
Sample Input
3 // Test Cases
10 11 // N K (testcase 1)
1 2 3 4 5 6 7 8 9 10
5 10 // N K (testcase 2)
2 4 6 8 10
6 27 // N K (testcase 3)
12 15 20 22 34 36
Sample Output
5
2
1
Solution:
int getPairsCount(int a[], int n, int k) {
 int count=0;
 int l=0;
 int r=n-1;
 while(l<r)
 {
 if(a[l]+a[r]>k)
 {
 r--;
 }
 else if(a[l]+a[r]<k)
 {
 l++;
 }
 else
 {
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
35 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 int x=a[l];
 int xcount=0;
 int y=a[r];
 int ycount=0;
 while(l<=r && a[l]==x)
 {
 xcount++;
 l++;
 }
 if(x!=y)
 {
 while(l<=r && a[r]==y) {
 ycount++;
 r--;
 }
 count+=xcount*ycount;
 }
 else
 {
 count+=xcount*(xcount-1)/2;
 }
 }
 }
 return count;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
36 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Find first occurrence of an integer in a sorted list with duplicates
Given a sorted list of integers, find the position of first occurrence of a given number K in
the list in O(log n) time.
Input Format:
First line of input will contain a positive integer T = number of test cases.
Each test case will contain the following two lines:
 First line will contain two positive integer N = number of elements in list and K.
 Second line will contain N space separated integers in increasing order.
Constraints:
 1 <= N <= 10^5
 -(10^9) <= arr[i], K <= (10^9)
Output Format:
For each test case, print on a single line the index of first occurrence of K in the list on 0-
based index. Print -1 if you cannot find K in the list.
Sample Input
3 // Test Cases
10 4 // N K (testcase 1)
1 2 4 4 4 4 5 8 9 10
15 7 // N K (testcase 2)
1 2 3 3 5 6 7 7 7 7 7 8 8 8 8
9 1 // N K (testcase 3)
-5 -4 -3 -2 -1 0 0 0 1
Sample Output
2
6
8
Solution:
#include <stdio.h>
/* Include other headers as needed */
int main()
{
 int t;
 scanf("%d",&t);
 while(t--)
 {
 int n,k,c=0;
 scanf("%d%d",&n,&k);
 int arr[n];
 for(int i=0;i<n;i++)
 {
 scanf("%d",&arr[i]);
 }
 for(int i=0;i<n;i++)
 {
 if(k==arr[i])
 {
 printf("%d\n",i);
 c++;
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
37 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 break;
 }
 }
 if(c==0)
 printf("-1\n");
 }
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
38 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Find count of a number in a sorted list with duplicates
Given a sorted list of integers with duplicates, find the count of a given number K in that list
in O(log n) time.
Input
First line of input will contain a positive integer T = number of test cases. Each test case will
contain 2 lines.
First line of each test case will contain two number N = number of elements in list and K
separated by space.
Next line will contain N space separated integers.
Constraints
 1 <= N <= 10^5
 -(10^9) <= arr[i], K <= (10^9)
Output
For each test case, print on a single line, the count of number K in this list.
Sample Input
3 // Test Cases
10 5 // N K (testcase 1)
1 2 2 5 5 5 7 7 7 8
10 1 // N K (testcase 2)
1 1 1 1 1 1 1 2 2 3
20 2 // N K (testcase 3)
1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4
Sample Output
3
7
5
Solution:
#include <stdio.h>
/* Include other headers as needed */
int main()
{
 int t;
 scanf("%d",&t);
 while(t--)
 {
 int n,k,c=0;
 scanf("%d%d",&n,&k);
 int arr[n];
 for(int i=0;i<n;i++)
 {
 scanf("%d",&arr[i]);
 }
 for(int i=0;i<n;i++)
 {
 if(arr[i]==k)
 {
 c++;
 }
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
39 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 }
 printf("%d\n",c);
 }
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
40 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Rotation count of a sorted Array
Given an array of integers, find the minimum number of rotations performed on some sorted
array to create this given array.
Input
First line of input will contain a number T = number of test cases. Each test case will contain
2 lines. First line will contain a number N = number of elements in the array (1 <= N <= 50).
Next line will contain N space separated integers.
Complete the function int rotationCount(int array[], int size) which will receive array and
size of the array as input and return how many times the sorted array is rotated. Function
should return -1 if the array is not rotated.
Output
Print one line of output for each test case with the minimum number of rotations for given
array.
Sample Input:
2
6
15 18 3 4 6 12
6
1 2 3 4 5 6
Sample Output
2
-1
Solution:
int rotationCount(int a[], int size)
{
 int min,c=0;
 for(int i=0;i<size;i++)
 {
 min = i;
 for(int j=i;j<size-1;j++)
 {
 if(a[i]>a[j+1])
 {
 min = j+1;
 }
 }
 if(min!=i)
 {
 c++;
 }
 }
 if(c==0)
 return -1;
 else
 return c;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
41 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Search element in a rotated sorted array
Given an array of n integers which is sorted but rotated by some number of times after
sorting, and a integer k. Search the element k in this sorted rotated array efficiently. For
example, suppose an array sorted in ascending order is rotated at some pivot unknown to you
beforehand. (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
Assume there are no duplicate elements in the array.
Expected Time Complexity: O(log(N))
Expected Space Complexity: O(1)
Input Format
First line of input will contain a number T = number of test cases. Each test case will contain
3 lines. The first line will contain an integer k to be searched. Second line will contain a
number n = number of elements in the array. Next line will contain N space separated
integers.
Complete the function int searchRotatedSortedArray() to search a value target in array a of
size given, and if target found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Output Format
Print the index of k in given array for each test case in new line if found and print -1 if k is
not present in given array.
Constraints
 1 <= T <= 10
 -1000 <= k <= 1000
 1 <= n <= 10^5
 -1000 <= arr[i] <= 1000
Sample Input
2 // Test Cases
3 // k (testcase 1)
6 // n
15 18 2 3 6 12 // arr[]
7 // k (testcase 2)
7 // n
4 5 8 9 1 2 3 // arr[]
Sample Output
3
-1
Solution:
int searchRotatedSortedArray(int arr[], int n, int k) {
 // Write your code here
 int c=0;
 for(int i=0;i<n;i++)
 {
 if(arr[i]==k)
 {
 c++;
 return i;
 }
 }
 if(c==0)
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
42 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
return -1;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
43 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Find Missing Element
There is an array of non-negative integers. A second array is formed by shuffling the
elements of the first array and deleting a random element. Given these two arrays, find which
element is missing in the second array.
Input Format:
First line of input will contain a positive integer T = number of test cases.
Each test case will contain 3 lines.
First line of each test case will contain two number m = size of the first array and n = size of
the second array separated by space.
Next 2 lines will contain m and n space separated non-negative integers.
Output Format:
For each test case, print the missing element in the second array.
Constraints:
0 "d T "d 10
2 "d m "d 10^5
n = m - 1
0 "d A[i], B[i] "d 10^4
Sample Input
1 // Test Cases
5 4
1 2 3 4 5
3 4 1 2
Sample Output
5
Solution:
int getMissingElement(int A[], int A_size, int B[], int B_size) {
 // Write your code here
 int sum1=0;
 int sum2 = 0;
 for(int i=0;i<A_size;i++)
 {
 sum1 +=A[i];
 }
 for(int j=0;j<B_size;j++)
 {
 sum2 +=B[j];
 }
 return sum1-sum2;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
44 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Find the number of swaps in Bubble Sort
Given a list of integers with no duplicates, find out how many swaps it will take to sort the
list in increasing order using Bubble sort.
Input Format:
First line of each test case will contain an integer T = number of test cases. Each test case
will contain two lines. First line will contain a number N = no. of elements in the list. Next
line will contain N space separated numbers.
Output Format:
For each test case, print on a single line, number of swaps required to sort the list in
increasing order using Bubble sort.
Constraints:
1 <= T <= 10
1 <= N <= 50
0 <= arr[i] <= 10^9
Sample Input
3 // No. of test cases
5
2 1 4 6 3
10
123 21 34 45 25 675 23 44 55 900
1
23
Sample Output
3
16
0
Solution:
#include <stdio.h>
/* Include other headers as needed */
void sort(int arr[] , int n)
{
 int c =0;
 n=n-1;
 for(int i=0;i<n;i++)
 {
 for(int j=0;j<n;j++)
 {
 if(arr[j]>arr[j+1])
 {
 int temp = arr[j];
 arr[j] = arr[j+1];
 arr[j+1] = temp;
 c++;
 }
 }
 }
 printf("%d\n",c);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
45 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
int main()
{
 int t;
 scanf("%d",&t);
 while(t--)
 {
 int n;
 scanf("%d",&n);
 int arr[n];
 for(int i=0;i<n;i++)
 scanf("%d",&arr[i]);
 sort(arr,n);
 }
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
46 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Find the number of swaps in Selection Sort
Write a program to count the number of swaps required to sort a given list of integers in
ascending order using the selection sort algorithm.
Input Format:
First line of the input contains the number of test cases T. T test cases follow. The first line of
each test case contains the N, the number of integers in the array. The second line contains N
space separated integers. All N numbers are distinct.
Output Format:
For each test case, print on one line, the number of swaps (minimum) to sort the given array
in ascending order using selection sort.
Constraints:
 1 <= T <= 10
 1 <= N <= 50
 -1000 <= arr[i] <= 1000
Sample Input
2 // No. of test cases
3
4 2 5
5
10 11 8 7 1
Sample Output
1
3
Solution:
#include<stdio.h>
void swapCount(int arr[],int s)
{
 int min , c=0;
 for(int i=0;i<s-1;i++)
 {
 min = i ;
 for(int j=i+1;j<s;j++)
 {
 if(arr[min]>arr[j])
 {
 min=j;
 }
 }
 if(min!=i)
 {
 int temp = arr[i];
 arr[i] = arr[min];
 arr[min] = temp;
 c++;
 }
 }
 printf("%d\n",c);
}
int main()
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
47 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
{
 int t;
 scanf("%d",&t);
 while(t--)
 {
 int n;
 scanf("%d",&n);
 int arr[n];
 for(int i=0;i<n;i++)
 {
 scanf("%d",&arr[i]);
 }
 swapCount(arr,n);
 }
return 0;
 }
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
48 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Find the numbers of shifts in Insertion sort
Given a list of integers, find out how many shifts it will take to sort the list using insertion
sort algorithm.
Input
First line of input will contain a positive integer T = number of test cases. Each test case will
contain 2 lines. First line will contain a positive integer N = number of elements in a list.
Next line will contain N space separated integers. There will be no duplicate in a list.
Output
For each test case, print on a single line the total number of shifts performed while sorting
the list using insertion sort algorithm. A shift is any change in position of an element in the
list while performing insertion sort.
Sample Input
3
5
2 4 1 3 5
10
10 9 8 7 6 5 4 3 2 1
5
1 2 3 4 5
Sample Output
5
54
0
Explanation
2,4,1,3,5 => 2,4,1,3,5 (0 shifts) => 1,2,4,3,5 (3 shifts - any change in position is shift) =>
1,2,3,4,5 (2 shifts) - total 5 shifts
Solution:
#include <stdio.h>
/* Include other headers as needed */
int main()
{
 int t;
 scanf("%d",&t);
 while(t--){
 int n;
 scanf("%d",&n);
 int arr[n];
 for(int i=0;i<n;i++)
 scanf("%d",&arr[i]);
 int cnt=0;
 for(int i=1;i<n;i++){
 int temp=arr[i];
 int j=i-1;
 int flag=0;
 while(j>=0 && arr[j]>temp){
 flag=1;
 cnt++;
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
49 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 arr[j+1]=arr[j];
 j--;
 }
 if(flag==1){
 cnt++;
 arr[j+1]=temp;
 }}
 printf("%d\n",cnt);
 }
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
50 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Sort an array using merge sort
Given an array of N integers, sort them in ascending order using merge sort (a divide and
conquer approach). Merge sort cut the array in two halves, calls itself on these halves and
then merge the two sorted halves recursively to make the whole array sorted. Write the two
functions mergeSort() and merge(), in which the mergeSort() divides array in half and calls
it recursively and merge() will merge the two sorted arrays given as parameters.
Input Format
First line contains the number of elements
Second line contains the elements of array separated by space.
Output Format
Print the elements of sorted array in ascending order.
Constraints
 1 <= N <= 10^5
 -(10^9) <= arr[i] <= 10^9
Sample Input
7
1 3 5 7 2 4 9
Sample Output
1 2 3 4 5 7 9
Solution:
// Merges two subarrays of arr[].
// First subarray is arr[l..m] and Second subarray is arr[m+1..r]
void merge(int array[], int l, int m, int r) {
 int i = l;
 int j= m+1;
 int k = l;
 int temp[50] ={0};
 while(i<=m && j<=r)
 {
 if(array[i]<array[j])
 {
 temp[k] = array[i];
 k++;i++;
 }
 else
 {
 temp[k] = array[j];
 k++;j++;
 }
 }
 if(i>m)
 {
 while(j<=r)
 {
 temp[k] = array[j];
 k++;j++;
 }
 }
 else
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
51 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 {
 while(i<=m)
 {
 temp[k] = array[i];
 k++;i++;
 }
 }
 for(int i=l ; i<=r;i++)
 {
 array[i] = temp[i];
 }
}
/* l is for left index and r is right index of the sub-array of arr to be sorted */
void mergeSort(int array[], int l, int r) {
 if(l<r)
 {
 int mid = (l+r)/2;
 mergeSort(array,l,mid);
 mergeSort(array,mid+1,r);
 merge(array,l,mid,r);
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
52 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Sort an array using quick sort
Given an array of N integers, sort them in ascending order using quick sort (a divide and
conquer approach). It picks an element as pivot and partitions the given array around the
picked pivot element recursively. Write the two functions quickSort() and partition(), in
which the quickSort() choose an pivot using partition() function and calls itself on the two
parts of array before and after the pivot element.
Input Format
First line contains the number of elements
Second line contains the elements of array separated by space.
Output Format
Print the elements of sorted array in ascending order.
Constraints
1 <= N <= 10^5
-(10^9) <= arr[i] <= 10^9
Sample Input
7
1 3 5 7 2 4 9
Sample Output
1 2 3 4 5 7 9
Solution:
int partition (int array[], int low, int high) {
}
int compare(const void* num1, const void* num2)
{
 int a = *(int*) num1;
 int b = *(int*) num2;
 if(a>b)
 {
 return 1;
 }
 else if(a<b)
 {
 return -1;
 }
 return 0;
}
void quickSort(int array[], int low, int high) {
 qsort(array,high+1,sizeof(int),compare);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
53 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Matrix Multiplication
Given two matrices A and B in the form of two dimensional arrays, find the dot product of
these two matrices.
Input Format:
First line of input will contain an integer T = no. of test cases.
Each test case will follow in multiple lines. First line of each test case will contain two
integers R1 = no. of rows in matrix A and C1 = no. of columns in matrix A. Next R1 lines
will each contain C1 space separated integers. Next line again contain two integers R2 = no.
of rows in B and C2 = no. columns in B. C1 will be equal to R2.
Output Format:
For each test case print matrix of size R1*C2 in R1 lines with each line containing C2 space
separated integers of corresponding row.
Constraints
1 <= T <= 1000
1 <= R1, C1, R2, C2 <= 50
C1 will be equals to R2
Sample Input
2 // Test Cases
2 3 // R1 C1 (testcase 1)
1 2 3 // matrix A
4 5 6
3 2 // R2 C2
2 3 // matrix B
1 2
2 1
2 2 // R1 C1 (testcase 2)
12 4 // matrix A
7 6
2 3 // R2 C2
2 4 6 // matrix B
3 5 7
Sample Output
10 10 // A * B (testcase 1)
25 28
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
54 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
36 68 100 // A * B (testcase 2)
32 58 84
Solution:
// Print the resultant matrix after (A * B)
void multiplyMatrix(int A[SIZE][SIZE],int B[SIZE][SIZE],int R1,int C1,int R2,int C2)
{
 // Write your code here
 int res[R1][C2];
 for(int i=0;i<R1;i++)
 {
 for(int j=0;j<C2;j++)
 {
 res[i][j]=0;
 for(int k=0;k<R2;k++)
 {
 res[i][j] += A[i][k] * B[k][j];
 }
 printf("%d ",res[i][j]);
 }
 printf("\n");
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
55 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Row or Column sum
John likes to play with numbers. He is playing a game where he writes numbers starting 1 till
N in multiple rows. Initially, he chooses a number W, and he writes W numbers in each row
except probably in the last row where he is done writing till number N. Given the values of N
and W along with a Query, your task is to solve that query to win the game. The query will
contain a number i and a capital letter 'R' or 'C'. If the letter is 'R', then print the sum of
numbers in the i'th row, else if the letter is 'C', then print the sum of numbers in the i'th
column.
Note: Rows and columns are numbered in a 1-based index ( as 1,2,3,..), and If the given row
or column number does not exist, then return 0 as the sum.
Examples:
N = 5, W = 2
Query = 2 C (i.e. print the sum of all the elements present in 2nd column)
Answer: 6
N = 10, W = 3
Query = 4 R (i.e. print the sum of all the elements present in 4th row)
Answer: 10
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
56 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Input Format:
First line of input will contain a number T = number of test cases.
For each test case, the first line will contain two numbers N and W.
Another line will contain a number i and letter 'R' or 'C' separated by space, which denotes
the given query.
Output Format:
For each test case, print the sum of numbers in the row or column on a new line.
Constraints:
1 <= T <= 100
1 <= N, W <= 10^8
1 <= i <= 10^8
Sample Input
2 // Test Cases
5 2 // N W (test case 1)
2 C // Query
10 3 // N W (test case 2)
4 R // Query
Sample Output
6
10
Solution:
//Q18.Row or Column sum?
long solveQuery(int N, int W, int i, char ch)
{
 long sum=0;
 int x;
 if(ch=='C' && i>W)
 return sum;
 if(ch=='C')
 {
 for(x=i;x<=N;x=x+W)
 sum=sum+x;
 }
 else for(x=W*(i-1)+1;x<=N && x<=W*i;x++)
 sum=sum+x;
 return sum;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
57 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Spirally traversing a matrix
Traversing an array is an elementary operation on an array, in which each element will be
processed for some operation. Printing elements is one example operation.
Complete the function printSpiral() given in the editor, which accepts a two dimensional
array and prints the array in spiral form rotating clockwise.
Input Format
Each test-case will begin with two number m and n where m = no. of rows and n = no. of
columns.
m rows will follow with n integers in each row separated by a space.
Constraints
1<=m<=50 and 1<=n<=50.
Output Format
For each test case, print the elements of 2-d array in spiral form starting from index (0,0) or
upper-left corner in clockwise direction.
Sample Input 1
3 3
4 5 6
7 8 9
10 11 12
Sample Output 1
4
5
6
9
12
11
10
7
8
Sample Input 2
3 4
4 3 2 1
5 7 8 11
2 4 6 8
Sample Output 2
4
3
2
1
11
8
6
4
2
5
7
8
Solution:
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
58 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
void printSpiral(int a[ROWS][COLS], int r, int c)
{
 int top=0,bottom=r-1,left=0,right=c-1,dir=0;
 while(top<=bottom && left<=right)
 {
 if(dir==0)
 {
 for(int i=left;i<=right;i++)
 {
 printf("%d\n",a[top][i]);
 } top++;
 }
 else if
 (dir==1)
 {
 for(int i=top;i<=bottom;i++)
 {
 printf("%d\n",a[i][right]);
 }
 right--;
 }
 else if(dir==2)
 {
 for(int i=right;i>=left;i--)
 {
 printf("%d\n",a[bottom][i]);
 }
 bottom--;
 }
 else if(dir==3)
 {
 for(int i=bottom;i>=top;i--)
 {
 printf("%d\n",a[i][left]);
 }
 left++;
 }
 dir=(dir+1)%4;
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
59 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Rotate a 2-D array by 90 degrees
Given a two dimensional N*N array, print the output if the array is rotated by 90 degrees in
clockwise direction.
þÿInput Format
First line of input will contain a number T = no. of test cases.
Each test case will contain one line with number N (N*N is the size of the array). Next N
lines will each contain N integers separated by space.
Output Format
For each test-case, print the array rotated clockwise by 90 degrees. Each row of an array
should be printed as m elements separated by exactly one space.
There should be no space after last element in each row. Print an extra line after output for
each test case.
Constraints
1 <= T <= 10
1 <= N <= 50
0 <= arr[i][j] <= 100
Sample Input
3 // Test Cases
3 // N (testcase 1)
1 2 3
4 5 6
7 8 9
2 // N (testcase 2)
2 4
1 3
1 // N (testcase 3)
14
Sample Output
7 4 1
8 5 2
9 6 3
1 2
3 4
14
Solution:
#include <stdio.h>
/* Include other headers as needed */
/* Include other headers as needed */
int main()
{
 int t;
 scanf("%d",&t);
 while(t--)
 {
 int n;
 scanf("%d",&n);
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
60 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 int arr[n][n];
 for(int i=0;i<n;i++)
 {
 for(int j=0;j<n;j++)
 {
 scanf("%d",&arr[i][j]);
 }
 }
 for(int i=0;i<n;i++)
 {
 for(int j=n-1;j>=0;j--)
 {
 printf("%d",arr[j][i]);
 if(j>0)
 {
 printf(" ");
 }
 }
 printf("\n");
 }
 printf("\n");
 }
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
61 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Implement strcmp function
Write your own implementation of strcmp function in C. The function will take two strings
as arguments and compare them character by character and return an integer value as under: -
0 : if both strings are identical (equal)
Negative : if the ASCII value of first unmatched character in first string is less than second
string.
Positive : if the ASCII value of first unmatched character in first string is greater than second
string.
Complete the function int strcmp(str1,str2) that will take two strings as parameters and
compare them. The function must return 0 if the strings are equal. Else function must return
the difference between the ASCII value of unmatched character.
Input Format:
The first line of input contains an integer T denoting the no of test cases .
Then T test cases follow. Each test case contains two strings str1 and str2.
Output Format:
For each test case, print the result of comparison of strings in new lines.
Sample Input
2
Coding Coding
programming Programming
Sample Output
0
32
Solution:
int strcmp(const char* str1, const char* str2) {
 // Write your code here
 int res =0;
 for(int i=0;*(str1+i)!='\0';i++)
 {
 if(*(str1+i)!=*(str2+i))
 {
 res = *(str1+i)-*(str2+i);
 break;
 }
 }
 return res;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
62 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Implement strcat function
Implement the strcat() function from string library as your own function. The function will
take two strings as arguments and concatenate the second string at the end of first string.
Input Format:
The first line of input contains an integer T denoting the no of test cases .
Then T test cases follow. Each test case contains two strings str2 and str1.
Function strcatCode(str1,str2) will take two parameters and concatenate the str2 string at end
of str1.
Output Format:
For each test case, print the concatenated string in new lines.
Sample Input
1
Code Quotient
Sample Output
CodeQuotient
Solution:
void strcatCode(char* str1, char* str2) {
 // Write your code here
 char* c = strcat(str1,str2);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
63 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Implement atoi and itoa functions
Implement the below functions with recursion from string library as your own functions.
1. itoa() function converts int data type to string data type.
2. atoi() function converts string data type to int data type.
Input Format:
The first line of input contains an integer T denoting the no of test cases . Then T test cases
follow. Each test case contains a string str and a number num.
Function void itoa(int num, char* result) will take the number as parameter and place the
string from this number in array result.
Function int atoi(char *str) will take the string as parameter and return the string as an
integer value.
Output Format:
For each test case, print the output of itoa() and atoi() in new lines.
þÿSample Input
1
"100" 135
Sample Output
100 "135"
Solution:
void itoa(int num, char* result) {
 // Write your code here
 sprintf(result , "%d" , num);
}
int atoi(char *str) {
 // Write your code here
 return strtol(str , NULL ,10);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
64 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Unique characters or not
Given a string, you need to test the characters for their uniqueness. If all the characters occur
at most 1 time in the string, then print “YES”, otherwise if some character occurs at least
twice in the string print “NO”.
Input Format:
The first line of input contains an integer T denoting the no of test cases . Then T test cases
follow. Each test case contains the string str.
Function void isUniqueChars(char *str) will take the string as parameter and print YES or
NO according to the occurence of characters in it.
Output Format:
For each test case, print YES or NO in new lines.
Constraints:
1 <= T <= 10
Given string can contain any valid ASCII character.
Sample Input
2
CodeQuotient
Coding
Sample Output
NO
YES
Solution:
// Return 1 if string contains all unique characters, else return 0
int isUniqueChars(char *str){
 // Write your code here
int c =1;
 for(int i=0;*(str+i)!='\0';i++)
 {
 for(int j=i+1;*(str+j)!='\0';j++)
 {
 if(str[i]==str[j])
 {
 c=0;
 break;
 }
 }
 }
 if(c==0) return 0;
 else return 1;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
65 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: String is palindrome or not
Given a string, you need to test if it is palindrome or not. If the string is palindrome print
“YES”, otherwise print “NO”.
Input Format
The first line of input contains an integer T denoting the no of test cases . Then T test cases
follow. Each test case contains the string str.
Function void isPalindrome(char *str) will take the string as parameter and print YES or NO
according to palindrome or not.
Output Format
For each test case, print YES or NO in new lines.
Constraints
1 <= T <= 10
Given string consists of uppercase and lowercase English letters.
Sample Input
2
Coding
cooc
Sample Output
NO
YES
Solution:
// Return 1 if the string is palindrome, else return 0
int isPalindrome(char *str) {
 // Write your code here
 int len = strlen(str);
 char st[100];
 int i=0;
 for( i=0;*(str+i)!='\0';i++)
 {
 st[i]=*(str+len-1-i);
 }
 st[i]='\0';
 int c=strcmp(st,str);
 if(c==0) return 1;
 else return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
66 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Reverse a string
Given a string, the task is to reverse it.
For example, if the string is "Hello" , reversed string is "olleH".
Complete the function reverseString() given in the editor that accepts a string & reverses it.
Input Format:
First line inputs number of Testcases t
Then t strings follow in each line
Output Format:
For each test case output the reversed string
Sample Input 1
1
codequotient
Sample Output 1
tneitouqedoc
Sample Input 2
1
programming
Sample Output 2
gnimmargorp
Solution:
// Do not print anything, just reverse the given string
void reverseString (char str[]) {
 // Write your code here
 int len = strlen(str);
 for(int i=0;i<len/2;i++)
 {
 char temp = str[i];
 str[i] = str[len-1-i];
 str[len-1-i]= temp;
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
67 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Implement strstr function
Implement the strstr() function from string library as your own function. The function will
take two strings as arguments and return the first occurrence of second string in first string if
found and -1 otherwise.
Input Format
The first line of input contains an integer T denoting the no of test cases . Then T test cases
follow. Each test case contains two strings str1 and sub.
Function int strstrCode(char *str1, char *sub) will take two parameters and find sub in str1.
If found it returns the index of starting character in str1 and -1 otherwise.
Output Format
For each test case, print the index of first occurrence of sub in str1 if found and -1 otherwise
in new lines.
Constraints
1 <= T <= 10
Given strings consist of uppercase and lowercase English letters.
Sample Input
2
CodeQuotient CQ
CodeQuotient Qu
Sample Output
-1
4
Solution:
int strstrCode(char *str1, char *sub) {
 // Write your code here
 int ln = strlen(str1),length=strlen(sub);
 int flag=1,k=0,l=0,m=0;
 for(int i=0;i<ln;i++)
 {
 flag=1;k=i;
 for(int j=0;j<length;j++)
 {
 if(str1[k]!=sub[j])
 {
 flag=0;
 break;
 }
 k++;
 }
 if(flag==1)
 {
 return i;
 }
 }
 if(flag==0) return -1;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
68 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: String at end or not
Given two strings, check weather second string occurs at end of first string or not.
Complete the function strAtEnd(str,suffix) which accepts two strings as parameter and return
1 if str2 occurs at end of str1 and 0 otherwise.
Input Format:
The first line of input contains an integer T denoting the no of test cases .
Then T test cases follow. Each test case contains two strings str1, str2.
Output Format:
For each test case, print 0 or 1 in new lines.
Constraints:
1 <= T <= 10
Given two strings can contain any valid ASCII character.
Sample Input
2
CodeQuotient ent
Coding Code
Sample Output
1
0
Solution:
int strAtEnd(char *str, char* suffix) {
 // Write your code here
 int len = strlen(suffix);
 int Len = strlen(str);
 int req = Len-len,j=0;
 for(int i=req;*(str+i)!='\0';i++)
 {
 if(*(str+i)==*(suffix+j))
 {
 j++;
 }
 }
 if(j==len) return 1;
 else return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
69 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Reduce the given sequence
Given a string and a character k, write a function to return the string after replacing all
consecutive character k with a single k.
þÿInput Format:
The first line of input contains an integer T denoting the no of test cases . Then T test cases
follow. Each test case contains one string str and a character k.
Function void reduceSequence(char *str, char ch) will take a string and a character as
parameter and modify it as specified above.
Output Format:
For each test case, print the new string in new lines.
Sample Input
2
aabbcdeaaaaaabd a
xyzxyzxyz x
Sample Output
abbcdeabd
xyzxyzxyz
Solution:
void reduceSequence(char *str, char ch){
 // Write your code here
 int len = strlen(str);
 char temp[len];
 int re='0';
 int j =0;
 for(int i=0;*(str+i)!='\0';i++)
 {
 re=0;
 if(str[i]==ch && str[i-1]==ch)
 {
 continue;
 }
 else
 temp[j++]=str[i];
 /* if(re==0)
 {
 temp[j++]=str[i];
 } */
 }
 temp[j]='\0';
 strcpy(str,temp);
 //printf("%s-",temp);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
70 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Technical Issue With The Keyboard
Aman likes to play with strings, so his friend Riya decided to send him a mail, containing a
sorted string with unique characters. But, due to some technical issue with her keyboard,
whenever she presses a key, the corresponding character gets printed multiple times. Now
Riya needs your help for removing all the unwanted characters from her string. For example,
If aabbbccdef is a sorted string generated by Riya, then you should output the following
string as answer abcdef.
Complete the function getDesiredString(str) that will take the string as parameter and
modify it as specified.
Input Format:
The first line of input contains an integer T denoting the no of test cases . Then T test cases
follow. Each test case contains a string str.
Output Format:
For each test case, print the new string in new lines.
Constraints:
1 <= T <= 10
1 <= length of string <= 10^5
Each string will contain only lower-case English letters.þÿ
Sample Input
2
aabbccdef
abddddddd
Sample Output
abcdef
abd
Solution:
// Do not print anything, just modify the given string itself
void getDesiredString(char *str) {
 // Write your code here
 int len = strlen(str);
 char temp[len];
 int j=0;
 for(int i=0;*(str+i)!='\0';i++)
 {
 if(str[i]==str[i+1])
 {
 continue;
 }
 else
 {
 temp[j++]=str[i];
 }
 }
 temp[j]='\0';
 strcpy(str,temp);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
71 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Count words
Write a function countWords() to count the numbers of words in a string.
A word is defined as text separated by space(' ') or multiple spaces.
The function will receive a string as input and return the numbers of words in this string.
Input Format
A single line of input which consists of the string whose words is to be counted
Output Format
Print the count the numbers of words in a string
 Sample Input
Codequotient get better at coding
Sample Output
5
Solution:
int countWords(char str[]) {
 // Write your code here
 if(str[0]==0) return 0;
 int c=0,te=0;
 for(int i=0;str[i]!='\0';i++)
 {
 if(str[i]==' ')
 {
 c++;
 }
 else if(c>0)
 {
 te++;
 c=0;
 }
 }
 return te+1;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
72 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Reverse the words of a string
A string is composing some words. These words are separated by some delimiter e.g. a
space.
Given a string (with space as a delimiter between words), reverse the words in the string
individually, not the whole string.
Complete the function revWordsString() which takes the string as parameter and reverse the
individual words of string and print them.
Input Format:
The first line of input contains an integer T denoting the no of test cases.
Each test cases contains one line, which contains a string.
Output Format:
For each test case, print the resultant string in new lines.
Sample Input
2
Code Quotient Loves Code
Hello Coders
Sample Output
edoC tneitouQ sevoL edoC
olleH sredoC
Solution:
void revs(char ch[],int j,int k)
{
 int len = (k-j)+1;
 int r = j+j+len;
 for(int i=j;i<r/2;i++)
 {
 char temp = ch[i];
 ch[i]=ch[r-1-i];
 ch[r-1-i]=temp;
 }
}
void revWordsString(char *str) {
 // Write your code here
 int j = 0;
 int len = strlen(str);
 for(int i=0;i<=len;i++)
 {
 if(str[i]==' ' || i==len)
 {
 int k = i-1;
 revs(str,j,k);
 j=i+1;
 }
 }
 printf("%s",str);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
73 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Reverse the order of words of a string
Given a string of words, reverse the order of words in the string individually, not the whole
string.
Complete the function revWordsOrder(str) that accepts a string as parameter and reverses
the order of words of string.
Input Format:
The first line of input contains an integer T denoting the no of test cases . Then T test cases
follow. Each test case contains the string str.
Output Format:
For each test case, print the resultant string in new lines.
Sample Input
2
Code Quotient Loves Code
Hello Coders
Sample Output
Code Loves Quotient Code
Coders Hello
Solution:
void revWordsOrder(char *str) {
 // Write your code here
 int len = strlen(str);
 char temp[len];
 int j=0,k=0;
 for(int i=len-1;i>=-1;i--)
 {
 if(str[i]==' ' || i==-1)
 {
 j=i+1;
 while(str[j]!='\0' && str[j]!=' ')
 {
 temp[k++]=str[j++];
 }
 temp[k]=' ';
 k++;
 }
 }
 temp[k-1]='\0';
 //printf("%s\n",temp);
 strcpy(str,temp);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
74 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: String is subsequence or not
Given two strings, find whether second string is subsequence of first string. A subsequence
of a string is defined as a string that can be obtained by deleting any number of characters
from the original string.
Complete the function strSubsequence(str1, str2) that accepts two strings as parameters
and print YES if str2 is a subsequence of str1 and NO otherwise.
Input Format
The first line of input contains an integer T denoting the no of test cases . Then T test cases
follow.
Each test case contains a single line of input which contains two strings str1, str2 seperated
by a space.
Output Format
For each test case, print YES or NO in new lines.
Constraints
1 <= T <= 10
Given strings consist of uppercase and lowercase English letters.
Sample Input
3
CodeQuotient CQ
CodeQuotient QC
Hello Hi
Sample Output
YES
NO
NO
Solution:
// Return 1 if the str2 is a subsequence of str1, else return 0
int strSubsequence(char *str1, char* str2) {
 // Write your code here
 int len = strlen(str2);
 int j=0;
 for(int i=0;*(str1+i)!='\0';i++)
 {
 if(str1[i]==str2[j])
 {
 len--;
 j++;
 }
 }
 if(len==0) return 1;
 else return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
75 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Implement strtok function
The strtok function will take two parameters i.e. a string and a delimiter. It then split the
string by the delimiter. For example, printing all words from a comma separated list.
Input Format:
The first line of input contains an integer T denoting the no of test cases . Then T test cases
follow. Each test case contains two strings str1, delim.
Function char* strtok_code(char *str1, char delim) will take a string and a delimiter as
parameters and returns the delimited words from string till end of it, and return NULL if no
more token remains.
Output Format:
For each test case, print all tokens in new lines.
Sample Input
2
Code-Quotient -
Hello/Hi/Hello /
Sample Output
Code
Quotient
Hello
Hi
Hello
Solution:
#include<stdio.h>
#include<string.h>
void prit(char h[],int j , int k)
{
 int c=0;
 char temp[100];
 int ln = (k-j)+1;
 int r = j+ln;
 for(int a=j;a<r;a++)
 {
 temp[c++]=h[a];
 }
 temp[c]='\0';
 printf("%s\n",temp);
}
void strtoko(char a[],char delim)
{
 int len = strlen(a);
 int j=0;
 for(int i=0;i<=len;i++)
 {
 if(a[i]==delim || i==len)
 {
 int k = i-1;
 prit(a,j,k);
 j=i+1;
 }
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
76 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 }
}
int main()
{
 int t,i,j=0;
 char str[50];
 char ch;
 scanf("%d", &t);
 while(t--)
 {
 scanf("%s %c", str, &ch);
 strtoko(str,ch);
 // Write your code here...
 }
return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
77 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Spell the number
Given a non-negative integer between 0 and 9,99,999 print the english phrase corresponding
to it i.e. 999999 is “nine lakhs ninety nine thousand nine hundred ninety nine”.
þÿInput Format:
The first line of input contains an integer T denoting the no of test cases . Then T test cases
follow. Each test case contains one integer number.
Function void intToWord(int num) will take the number as parameter and print the english
phrase for it in small letters separated by space.
Output Format:
For each test case, print the english phrase in new lines.
Sample Input
2 // No. of test cases
31
12345
Sample Output
thirty one
twelve thousand three hundred forty five
Solution:
void intToWord(int num) {
 // Write your code here
 char *ones[]={"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
"nineteen"};
char *tens[]={" ", " " , "twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"};
 if(num<20)
 {
 printf("%s",ones[num]);
 }
 else if(num<100)
 {
 printf("%s ",tens[num/10]);
 intToWord(num%10);
 }
 else if(num<1000)
 {
 printf("%s hundred",ones[num/100]);
 if(num%100==0)
 {
 return;
 }
 else printf(" ");
 intToWord(num%100);
 }
 else if(num<20000)
 {
 printf("%s thousand ",ones[num/1000]);
 intToWord(num%1000);
 }
 else if(num<100000)
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
78 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 {
 printf("%s ",tens[num/10000]);
 intToWord(num%10000);
 }
 else if(num<1000000)
 {
 printf("%s lakhs ",ones[num/100000]);
 intToWord(num%100000);
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
79 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Sort the strings lexicographically
Given a list of strings, sort them in lexicographical order i.e. dictionary order.
 Input Format:
The first line of input contains an integer T denoting the no of test cases. Then T test cases
follow. Each test case contains the number of strings in it followed by the actual strings.
Function void sortStrings(int n, string str[ ]) will take the number of strings and an array of
strings as parameters and print them in sorted order.
Output Format:
For each test case, print the strings as space separated list in lexicographical order (without
space after last string) in newlines.
Sample Input
2 // Test Cases
4 code quotient loves coders
5 hi cat ate my homework
Sample Output
code coders loves quotient
ate cat hi homework my
Solution:
#include<string.h>
void sortStrings(int n, char str[][50]) {
 // Write your code here
 for(int i=0;i<n;i++)
 {
 for(int j = i+1;j<n;j++)
 {
 int x = strcmp(str[i],str[j]);
 if(x>0)
 {
 char temp[50];
 strcpy(temp,str[i]);
 strcpy(str[i],str[j]);
 strcpy(str[j],temp);
 //str[j]=temp;
 }
 }
 }
 for(int i=0;i<n;i++)
 {
 printf("%s",str[i]);
 if(i<n-1) printf(" ");
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
80 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Check if strings are rotations or not
Given two strings, find whether both are rotations of each other or not. For example,
Given str1 = abacd and str2 = acdab, we can get str1 by rotating str2 and,
Given str1 = coder and str2 = cored, we can not get str1 by rotating str2.
þÿInput Format
The first line of input contains an integer T denoting the no of test cases. Then T test cases
follow. Each test case contains two strings str1 and str2.
Output Format
For each test case, print YES or NO in new lines.
Sample Input
2 // Test Cases
abacd // testcase 1
acdab
coder // testcase 2
cored
Sample Output
YES
NO
Solution:
// return 1 for YES and 0 for NO.
int isRotation(char *str1, char *str2) {
 // Write your code here
 int x=strlen(str1);
 int y=strlen(str2);
 if(x !=y){
 return 0;
 }
 char temp[2*x+1];
 strcpy(temp,str1);
 strcat(temp,str1);
 return strstr(temp,str2) !=NULL;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
81 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Count the set bits of a number
Every number is represented in binary form in memory. A binary form consists of bits,
which can take only two values i.e. 0 or 1. Given an integer number you have to count
number of set bits in its binary representation.
Complete the function below which takes a number as argument and return the number of set
bits i.e. bits with value 1.
Input Format
First line contains total number of Test Cases. Following T lines will contain one number
each for test cases
Output Format
Number of Set Bits in each number each in a new line
Sample Input
3
4
5
14
Sample Output
1
2
3
Explanation:
4 is 0100
5 is 0101
14 is 1110
Solution:
int countBits(int num)
{
 int rem,res=0,temp,count=0;
 temp =num;
 while(temp!=0)
 {
 rem = temp % 2 ;
 res = res* 10 + rem;
 temp = temp/2;
 }
 rem=0;
 while(res!=0)
 {
 rem =res %10;
 if(rem!=0)
 {
 count++;
 }
 res=res/10;
 }
 return count;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
82 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Toggle the number except kth bit
You are given a number N and another number k. Print the number after toggling all bits of
N except the kth bit (0 based indexing on 64-bit machine where integer takes 4 bytes).
Input Format:
First line contains total number of Test Cases. Following T lines will contains two numbers
(N, k) seperated by space each for test case.
Output Format:
Toggled number for each test case in new lines in decimal format.
Sample Input:
2
4 2
5 1
Sample Output:
-1
-8
Explanation:
In 8-bits, 4 is 0000 0100, so toggling all bits except bit no. 2, it becomes 1111 1111. which is
-1
In 8-bits, 5 is 0000 0101, so toggling all bits except bit no. 1, it becomes 1111 1000. which is
-8
Solution:
int toggleExceptKthBit(int n,int k){
 // Write your code here
 int mask=(1<<k);
 int toggled=n^(~0);
 return toggled ^ mask;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
83 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Find the odd man out
Given an array containing n numbers, in which, all the numbers are present even number of
times except for one number which is occurring odd number of times. Find this odd man out
in linear time i.e. without making double scan of the array.
Complete the findOddMan() function which accepts an array of integers, arr as parameter
and must return an integer denoting the element in array occurring odd number of times.
Your solution must be optimized otherwise you may get an error "Time Limit
Exceeded".
þÿ
Input Format:
First line contains an odd number ‘n’ i.e. total number of elements in the array. Then N lines
follow containing the elements of array.
Output Format:
Print the number which occurs odd number of times.
Constraints:
1 <= n <= 10^5
-(10^9) <= arr[i] <= 10^9
Sample Input 1
7 // n
3
2
1
2
3
1
1
Sample Output 1
1
Explanation 1
1 is present three times whereas rest elements 2 and 3 are present twice.
Sample Input 2
9 // n
2
3
2
1
2
3
1
1
1
Sample Output 2
2
Explanation 2
2 is present three times, 1 is present at four positions and 3 is present at two positions.
Solution:
int findOddMan(int n, int arr[]) {
 // Write your code here
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
84 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 int xor = 0;
 for(int i=0;i<n;i++)
 {
 xor = xor ^ arr[i];
 }
 return xor;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
85 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Find the two strange elements
Given an array containing n elements, in which, all the elements are present even number of
times except for two elements which occurs odd number of times. Find these two strange
elements in ascending order in linear time with constant space complexity.
Input:
First line contains an even number ‘n’ i.e. total number of elements in the array. Second line
contains n space separated elements of the array
Output:
Print the strange numbers separated by space in ascending order.
Constraints:
n < 10^8
Sample Input:
4
3 1 2 1
Sample Output:
2 3
Explanation:
1 is occurring two times, whereas 2 and 3 occurs only once.
Solution:
void printStrangeElements(int arr[], int n){
 int res = 0;
 for(int i=0;i<n;i++){
 res ^= arr[i];
 }
 int right = res & -res;
 int a=0;
 int b=0;
 for(int i=0; i<n; i++){
 if(arr[i] & right){
 a ^= arr[i];
 }
 else{
 b ^= arr[i];
 }
 }
 if (a < b) {
 printf("%d %d", a, b);
 } else {
 printf("%d %d", b, a);
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
86 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Saving the Earth with Binary Fever
The Earth is under a threat from the outer space and the superheroes are busy in their
personal life. Meanwhile, you have to catch the enemy and destroy him. Enemy is N steps
above from you (assume yourself on first level i.e. level 0). Due to your binary fever, you can
jump only in power of 2 i.e. 1, 2, 4, 8, 16 etc. So to defeat the enemy as quickly as possible,
what is the minimum number of jumps you have to make?
Example: N = 25
Now, to reach the level 25 as quickly as possible, you can first make a jump of 1 unit, then of
8 units and finally a jump of 16 units. Therefore, a minimum of 3 jumps are required. Note
that, jumps need not to be in increasing sequence only i.e. if you want, you can jump 8 units
first, then 1 unit and finally 16 units.
Your solution must be optimized otherwise you may get an error "Time Limit
Exceeded".
Input Format
The first line contains the number of test cases T. Next each line contains a number N which
is the level of enemy.
Constraints:
1 <= T <= 10
0 <= N <= 2^53
Output Format
For each test case, print the minimum number of jumps shall be made by you to save the
Earth, in a new line.
Sample Input:
2 // Test Cases
3 // N (testcase 1)
7 // N (testcase 2)
Sample Output:
2
3
Explanation:
Level 3 can be achieved by making jumps of 1 and 2, so total 2 jumps required.
Level 7 can be achieved by making jumps of 1, 2 and 4, so total 3 jumps required.
Solution:
// Return the minimum number of jumps
int getMinJumps(unsigned long long int n) {
 // Write your code here
 int jumps=0;
 while(n){
 unsigned long long int power=1;
 while(power<=n){
 power*=2;
 }
 power/=2;
 n-=power;
 jumps++;
 }
 return jumps;
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
87 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
88 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Which flight to take
Mr. Gopal has to book a flight for his holiday. He prefers to fly cheap. However, if two
flights have same price, he prefers one with shorter flight duration. If two flights have same
price and flight duration, he prefers to fly during early hours in a day. Mr. Gopal needs your
help. Given description of his flight options in format '{flight number} {departure time}
{flight duration} {price}', he wants you to give him three options out of all in decreasing
order of his preference.
Input
First line of input will contain a positive integer i.e. number of test cases. Each test case will
contain multiple lines.
First line will contain a positive integer N i.e. number of flights to choose. Next N lines will
contain description of flights in format '{flight number} {departure time} {flight duration}
{price}' . Departure time will be in format 'HH:mm' where HH is hour in 24 hour clock and
mm is minutes. Flight duration will be in minutes.
Output
For each test case, print on a single line flight numbers of top three options for Mr. Gopal in
decreasing order of his preference.
The flight numbers should be separated by single space. There should be no space after last
flight number on each line.
Sample Input
1
6
F1 07:35 135 300
F2 08:30 165 350
F3 05:36 195 270
F4 18:20 155 350
F5 11:35 205 300
F6 15:35 215 270
Sample Output
F3 F6 F1
Solution:
#include <stdio.h>
#include<stdlib.h>
struct fDetails {
 char num[10];
 char dep[10];
 int dur;
 int price;
};
void swap(struct fDetails* a, struct fDetails* b) {
 struct fDetails temp = *a;
 *a = *b;
 *b = temp;
}
int main() {
 int t;
 scanf("%d", &t);
 while(t--) {
 int n;
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
89 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 scanf("%d", &n);
 struct fDetails flight[n];
 for (int i = 0; i < n; i++) {
 scanf("%s", flight[i].num);
 scanf("%s", flight[i].dep);
 scanf("%d", &flight[i].dur);
 scanf("%d", &flight[i].price);
 }
 // Sorting
 int swapped = 0, i = 0;
 do {
 swapped = 0;
 for (int j = 0; j < n - 1 - i; j++) {
 if (flight[j].price > flight[j + 1].price) {
 swap(&flight[j], &flight[j + 1]);
 swapped = 1;
 }
 if (flight[j].dur > flight[j + 1].dur && flight[j].price == flight[j + 1].price) {
 swap(&flight[j], &flight[j + 1]);
 swapped = 1;
 }
 char t[5], t2[5];
 t[0] = flight[j].dep[0];
 t[1] = flight[j].dep[1];
 t[2] = flight[j].dep[3];
 t[3] = flight[j].dep[4];
 t[4] = '\0';
 t2[0] = flight[j + 1].dep[0];
 t2[1] = flight[j + 1].dep[1];
 t2[2] = flight[j + 1].dep[3];
 t2[3] = flight[j + 1].dep[4];
 t2[4] = '\0';
 if (atoi(t) > atoi(t2) && flight[j].dur == flight[j + 1].dur) {
 swap(&flight[j], &flight[j + 1]);
 swapped = 1;
 }
 }
 i++;
 } while(swapped);
 for (int i = 0; i < 3; i++) {
 printf("%s",flight[i].num);
 if (i < 2) printf(" ");
 }
 printf("\n");
 }
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
90 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Calculate the Total amount to be given
Suppose you have to organize a farewell party for one of your colleague. You have to buy
some items from market and you want to spend less. Given required details about all items
required you have to tell the minimum amount to be paid for all the items.
Input
The first line of input contains an integer T denoting the no of test cases. Each test case will
contain multiple lines. First line will contain a positive integer N i.e. number of items to buy.
Next N lines will contain description of items in format '{item Name} {Qty Required}
{rate1} {rate2}'.
Output
For each test case, print on a single line minimum amount to be spent on these items.
Sample Input
1
5
IA 2 20 30
IB 5 5 10
IC 1 2 1
ID 10 10 10
IE 4 20 10
Sample Output
206
Explanation:
IA 2x20 = 40
IB 5x5 = 25
IC 1x1 = 1
ID 10x10 = 100
IE 4x10 = 40
Total amount is 206
Solution:
#include <stdio.h>
/* Include other headers as needed */
struct item{
 char name[10];
 int qt;
 int price1;
 int price2;
};
int main()
{
 int t;
 scanf("%d",&t);
 while(t--)
 {
 int n;
 scanf("%d",&n);
 struct item b[n];
 for(int i=0;i<n;i++)
 {
 scanf("%s%d%d%d",b[i].name,&b[i].qt,&b[i].price1,&b[i].price2);
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
91 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 }
 int total=0,res=0;
 for(int i=0;i<n;i++)
 {
 if(b[i].price1<b[i].price2)
 {
 res = b[i].price1;
 }
 else res = b[i].price2;
 total +=(b[i].qt*res);
 }
 printf("%d",total);
 }
 /* Enter your code here. Read input from STDIN. Print output to STDOUT */
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
92 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Calculate the nextdate of a given date
Given a date with three elements date, month & year, your task is to print the next date of it.
Input Format:
The first line of input contains an integer T denoting the no of test cases. Each test case will
contain a date in format '{date} {month} {year}'.
Output Format:
For each test case, print the next date in DD-MM-YYYY format on new lines.
Sample Input
2
12 9 2016
28 2 2020
Sample Output
13-09-2016
29-02-2020
Solution:
#include <stdio.h>
struct Date {
 int day;
 int month;
 int year;
};
//leap Year
int isLeapYear(int year) {
 return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}
//maxDay
int maxDay(int month, int year) {
 //check febrarury month
 if (month == 2) {
 return isLeapYear(year) ? 29 : 28;
 }
 // except febrarury 28 days month
 else if (month == 4 || month == 6 || month == 9 || month == 11) {
 return 30;
 }
 // others
 else {
 return 31;
 }
}
//next Date
void nxtdate(struct Date date) {
 int maxDays = maxDay(date.month, date.year);
 date.day++; //day
 if (date.day > maxDays) {
 date.day = 1;
 date.month++; // month
 if (date.month > 12) {
 date.month = 1;
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
93 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 date.year++; // year
 }
 }
 printf("%02d-%02d-%04d\n", date.day, date.month, date.year);
}
//main function
int main() {
 int t;
 scanf("%d", &t);
 struct Date dates[t];
 for (int i = 0; i < t; i++) {
 scanf("%d %d %d", &dates[i].day, &dates[i].month, &dates[i].year);
 }
 for (int i = 0; i < t; i++) {
 nxtdate(dates[i]);
 }
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
94 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Print the lines from file
Access a text file from current folder and print its contents in odd-even manner i.e. print all
the odd lines first then print the even lines.
Input Format:
You have been provided a text file path in input.
Output Format:
Print the file contents in odd-even manner.
Sample Input
file1.txt
Let the contents of file1.txt are as below: -
This is line one
Hello, welcome to programming
Code Quotient - Get better at coding
This is last line of file.
Sample Output
This is line one
Code Quotient - Get better at coding
Hello, welcome to programming
This is last line of file.
Solution:
#include <stdio.h>
#define MAX_LINES 1000
#define MAX_LINE_LENGTH 1000
void print_odd_even_lines(char *filename) {
 FILE *fp = fopen(filename, "r");
 if (fp == NULL) {
 printf("Error: Unable to open file.\n");
 return;
 }
 char lines[MAX_LINES][MAX_LINE_LENGTH];
 int num_lines = 0;
 // read the lines of the file into the lines array
 while (fgets(lines[num_lines], MAX_LINE_LENGTH, fp) != NULL && num_lines <
MAX_LINES) {
 int line_length = strlen(lines[num_lines]);
 if (lines[num_lines][line_length - 1] == '\n') {
 lines[num_lines][line_length - 1] = '\0';
 }
 num_lines++;
 }
 fclose(fp);
 // print the odd lines
 for (int i = 0; i < num_lines; i += 2) {
 printf("%s\n", lines[i]);
 }
 // print the even lines
 for (int i = 1; i < num_lines; i += 2) {
 printf("%s\n", lines[i]);
 }
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
95 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
}
int main() {
 char filename[100];
 scanf("%s", filename);
 print_odd_even_lines(filename);
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
96 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Capitalize First Letter of every Word in a File
Write a function as below, which given two filenames in parameters, change the first letter of
every word in first file to uppercase of that character if it is a lower case character and store it
in the second file.
Sample Input
Capital1.txt
output.txt
Let the contents of this file are as below:
this is line one
hello, welcome to programming
Code Quotient - Get better at coding
this is last line of file.
Sample Output
This Is Line One
Hello, Welcome To Programming
Code Quotient - Get Better At Coding
This Is Last Line Of File.
Solution:
#include <stdio.h>
#include <ctype.h>
void capitalizeWords(char source[20], char dest[20]) {
 FILE *input = fopen(source, "r");
 FILE *output = fopen(dest, "w");
 if (input == NULL || output == NULL) {
 printf("Error opening the files.\n");
 return;
 }
 int prev_char = ' '; // To track the previous character
 int current_char;
 while ((current_char = fgetc(input)) != EOF) {
 if (prev_char == ' ' || prev_char == '\n' || prev_char == '\t') {
 // If the previous character is a space, newline, or tab,
 // convert the current character to uppercase if it is lowercase
 current_char = toupper(current_char);
 }
 fputc(current_char, output);
 prev_char = current_char;
 }
 fclose(input);
 fclose(output);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
97 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Compare two Files, print the location of first byte that they differ
Access two files given in current folder. Compare and print -1 if they are totally same, and
print the first byte number where they differ.
Input
Complete the function int compare_two_files(FILE *f1, FILE *f2), which will take two file
pointers and return -1 or the byte number where both files differ.
Output
For each test case, print -1 or the first differing byte number in new lines.
Solution:
int compare_two_files(FILE *f1, FILE *f2) {
 int byte_number = 0; // Start counting from byte 1
 while (1) {
 int byte1 = fgetc(f1);
 int byte2 = fgetc(f2);
 if (byte1 == EOF && byte2 == EOF) {
 return -1; // Files are identical
 }
 if (byte1 != byte2) {
 return byte_number; // Files differ at this byte number
 }
 byte_number++;
 if (byte1 == EOF || byte2 == EOF) {
 return byte_number; // One file ended before the other
 }
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
98 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Count No of Lines & Blank Lines in a given text file
Write a function as below, which given a filename as parameter, count the total number of
lines and total number of blank lines in it.
void countLines(char f1[20])
Input
You have been provided a text file path. Count the total lines and total blank lines in it.
Output
For each test case, print the total lines and total blank lines separated by space in one line.
Sample Input
fileCount.txt
Let the file contents are as below:
This is line one
Hello, welcome to programming
Code quotient - Get better at coding
b
Sample Output
8 4
Solution:
void countLines(char f1[20]) {
 FILE *file;
 file = fopen(f1, "r");
 if (file == NULL) {
 printf("Error opening the file.\n");
 return;
 }
 int total_lines = 1;
 int blank_lines = 0;
 char c;
 int is_blank_line = 1; // Assume the first line is blank initially
 while ((c = fgetc(file)) != EOF) {
 if (c == '\n') {
 total_lines++;
 if (is_blank_line) {
 blank_lines++;
 }
 is_blank_line = 1; // Assume the next line is blank initially
 } else if (c != ' ' && c != '\t' && c != '\r') {
 is_blank_line = 0; // Line is not blank
 }
 }
 // Check if the last line is blank
 if (is_blank_line) {
 blank_lines++;
 }
 printf("%d %d\n", total_lines, blank_lines);
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
99 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 fclose(file);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
100 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Append the Content of File at the end of Another file
Write a function as below, which given three filenames in parameters, append the contents of
first file followed by contents of second file in the third file.
void appendFiles(char f1[20], char f2[20], char f3[20])
The contents of files pointed by f1 and f2 must be written in file f3 in that order.
Sample Input
append1.txt
This is line one
Code Quotient - Get better at coding.
append2.txt
Hello, welcome to programming
Code Quotient - Get better at coding
This is last line of file.
Sample Output
This is line one
Code Quotient - Get better at coding.
Hello, welcome to programming
Code Quotient - Get better at coding
This is last line of file.
Solution:
void appendFiles(char f1[20], char f2[20], char f3[20])
{
 FILE *file1, *file2, *file3;
 char ch;
 file1 = fopen(f1, "r");
 file2 = fopen(f2, "r");
 file3 = fopen(f3, "a");
 if (file1 == NULL || file2 == NULL || file3 == NULL)
 {
 printf("Error opening files\n");
 return;
 }
 // Copy contents of first file to third file
 while ((ch = fgetc(file1)) != EOF)
 fputc(ch, file3);
 // Add a newline character at the end of the first file
 if (ch != '\n')
 fputc('\n', file3);
 // Copy contents of second file to third file
 while ((ch = fgetc(file2)) != EOF)
 fputc(ch, file3);
 fclose(file1);
 fclose(file2);
 fclose(file3);
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
101 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Delete a specific Line from a Text File
Given a text file and a integer N, delete the Nth line from file (if exists), if number of lines in
file are less than N, print -1 otherwise print the file contents after deletion.
Input
First line will contain the file name.
Second line will contain total number of test cases T for that file,
Next T lines will contain the line numbers
Let the Contents of a sample file are as below:
This is line one
This is line two
This is line three
This is line four
Hello, welcome to programming
Code quotient - Get better at coding
This is line seven
Output
For each test case, print the contents of file after deletion.
Sample Input
filedelete.txt
2
4
14
Sample Output
This is line one
This is line two
This is line three
Hello, welcome to programming
Code quotient - Get better at coding
This is line seven
-1
Solution:
#include <stdio.h>
int main() {
 char file_name[100];
 int T;
 scanf("%s", file_name);
 scanf("%d", &T);
 FILE* file = fopen(file_name, "r");
 if (file == NULL) {
 printf("Error opening file.\n");
 return 0;
 }
 // Count the number of lines in the file
 int line_count = 0;
 char ch;
 while ((ch = fgetc(file)) != EOF) {
 if (ch == '\n')
 line_count++;
 }
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
102 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 // Reset the file pointer to the beginning
 rewind(file);
 int i;
 for (i = 0; i < T; i++) {
 int line_number;
 scanf("%d", &line_number);
 if (line_number > line_count) {
 printf("-1\n");
 } else {
 // Create a temporary file to write the updated contents
 FILE* temp_file = fopen("temp.txt", "w");
 if (temp_file == NULL) {
 printf("Error creating temporary file.\n");
 fclose(file);
 return 0;
 }
 int current_line = 1;
 char line[1000];
 // Copy lines to the temporary file, excluding the specified line
 while (fgets(line, sizeof(line), file)) {
 if (current_line != line_number)
 fputs(line, temp_file);
 current_line++;
 }
 fclose(temp_file);
 // Close the original file and remove it
 fclose(file);
 remove(file_name);
 // Rename the temporary file as the original file
 rename("temp.txt", file_name);
 // Open the updated file for reading
 file = fopen(file_name, "r");
 if (file == NULL) {
 printf("Error opening updated file.\n");
 return 0;
 }
 while (fgets(line, sizeof(line), file))
 printf("%s", line);
 printf("\n"); }
 }
 fclose(file);
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
103 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Reverse the Content of File and Print it
Given a text file in current directory, print its contents backwards from last word of last line
back to the first word of first line.
Input
You have been provided a text file name in input.
Output
Print the contents of file in backward manner.
Sample Input
file1.txt
Let the contents of file1.txt are as below:
This is line one
Hello welcome to programming
Code Quotient - Get better at coding
This is last line of file
Sample Output
file of line last is This
coding at better Get - Quotient Code
programming to welcome Hello
one line is This
Solution:
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void printReverse(FILE *file) {
 char lines[100][1000];
 int lineCount = 0;
 char line[1000];
 while (fgets(line, sizeof(line), file)) {
 int length = strlen(line);
 if (line[length - 1] == '\n')
 line[length - 1] = '\0';
 strcpy(lines[lineCount], line);
 lineCount++;
 }
 for (int i = lineCount - 1; i >= 0; i--) {
 char *token = strtok(lines[i], " ");
 char words[100][100];
 int wordCount = 0;
 while (token != NULL) {
 strcpy(words[wordCount], token);
 wordCount++;
 token = strtok(NULL, " ");
 }
 for (int j = wordCount - 1; j >= 0; j--) {
 printf("%s", words[j]);
 if (j > 0) {
 printf(" ");
 }
 }
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
104 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 printf("\n");
 }
}
int main() {
 char fileName[100];
 scanf("%s", fileName);
 FILE *file = fopen(fileName, "r");
 printReverse(file);
 fclose(file);
 return 0;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
105 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Implement the stack using array
Implement the stack using array representation
Input
First line of input contains the number of test cases.
First line of each test case contains an integer Q denoting the number of queries.
A Query is of 2 Types
(a) 1 item (a query of this type means push 'item' onto the stack)
(b) 2 (a query of this type means to pop element from stack and print the popped element)
The next Q lines of each test case contains Q queries.
Output
The output for each test case will be space separated integers having -1 if the stack is empty
else the element popped out from the stack.
You are required to complete the methods given.
Sample Input
1
8
1
3
2
1
4
1
2
2
1
6
2
2
Sample Output
3 2 6 4
Explanation:
First query is push 3,
then pop will print 3,
3rd query is push 4,
then push 2,
5th query is pop which prints 2,
6th query is push 6,
then pop will print 6 and
last query of pop will print 4.
Solution:
/*
int Stack[SIZE], top = -1;
Above variables are used for Stack, SIZE and top and all are global variables. */
// Function to check if stack is full.
int isFull()
{
 return top == (SIZE-1);
}
// Function to check if stack is empty.
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
106 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
int isEmpty()
{
 return top == -1;
}
// Function to add an item to stack.
int push(int item)
{
 if (isFull())
 {
 return -1;
 }
 Stack[++top] = item;
 return Stack;
}
// Function to remove an item from stack.
int pop()
{
 int temp;
 if (isEmpty())
 {
 return -1;
 }
 temp=Stack[top--];
 return temp;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
107 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Reverse a string using stack
Given a string, the task is to reverse the string using stack data structure.
Complete the function reverseString() that accepts the string, and reverses the string.
Input Format
The first line of input will contains an integer T denoting the no of test cases. Then T test
cases follow.
Each test case contains a number N.
Then N strings follow which are to be reversed
Output Format
For each test case, you have to reverse the string in the array given. You are required to
complete the methods given only.
Constraints
1 <= T <= 10
þÿ0 <= N <= 100
Given strings consist of uppercase and lowercase English letters.
Sample Input
1 // No. of test cases
2 // No. of strings
CodeQuotient
Code
Sample Output
tneitouQedoC
edoCþÿ
Solution:
/*
int Stack[SIZE], top = -1;
int isFull();
int isEmpty();
int push(int item);
int pop();
Above global variables and functions are available to you for use, So just complete the below
function as per specifications. */
char* reverseString(char *s)
{
 int len = strlen(s);
 char *rev = (char *) malloc((len+1) * sizeof(char));
 int i;
 for( i=0;i<len;i++){
 push(s[i]);
 }
 for(i = 0;i<len;i++){
 rev[i] = pop();
 }
 rev[len] = '\0';
 return rev;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
108 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Implement the queue using array
Implement the queue using array representation. Complete the methods given in the editor.
Input Format
First line of input contains an integer T denoting number of test cases. Each test case
contains an integer Q denoting the number of queries.
A Query is of 2 Types
(a) 1 <item> (a query of this type means insert 'item' into the queue)
(b) 2 (a query of this type means to delete element from queue and print the deleted
element)
The next lines of each test case contains Q queries.
Output Format
The output for each test case will be space separated integers having -1 if the queue is empty
else the element deleted from the queue.
Sample Input
1
8
1
3
2
1
4
1
2
2
1
6
2
2
Sample Output
3 4 2 6
Explanation:
First query is insert 3,
then delete will print 3,
3rd query is insert 4,
then insert 2,
5th query is delete which prints 4,
6th query is insert 6,
then delete will print 2 and
last query of delete will print 6.
Solution:
/*
int front=-1, rear=-1;
int array[SIZE];
Above variables are used for queue, SIZE, front and rear and all are global variables.
Complete the below two methods. */
// Method to add an item to the queue.
void enqueue(int item)
{
 if(rear == SIZE - 1)
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
109 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
 {
 printf("Queue is full\n");
 return ;
 }
 if(front == -1 && rear == -1)
 front = rear = 0;
 else
 rear++;
 array[rear] = item;
}
// Method to remove an item from queue.
int dequeue()
{
 if(front == -1)
 {
 return -1;
 }
 int item = array[front];
 if (front == rear)
 front = rear = -1;
 else
 front++;
 return item;
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
110 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Reverse a given queue
Given a queue of integer elements, your task is to reverse it.
The function reverseQueue(queue) takes the queue as input and reverse it.
Input Format
The first line of input will contains an integer T denoting the no of test cases.
Then T test cases follow.
Each test case contains a number N followed by N number of elements in order in which
they will be inserted in queue.
Output Format
For each test case, you have to reverse the queue in the array given. You are required to
complete the methods given only.
Constraints
1 <= T <= 10
þÿ1 <= N <= 100
Sample Input
2
4
1 2 3 4
5
10 20 30 50 40
Sample Output
4 3 2 1
40 50 30 20 10
Solution:
/*
int front=-1, rear=-1;
int array[SIZE];
void enqueue(int item);
int dequeue();
Above variables are used for queue, SIZE, front and rear and all are global variables.
Complete the below method. */
void reverseQueue(int q[]){
 int stack[SIZE];
 int top=-1;
 while(front<=rear){
 int item=dequeue();
 top++;
 stack[top]=item;
 }
 while(top>=0){
 int item =stack[top];
 enqueue(item);
 top--;
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
111 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in
Aim: Reverse first N elements of a given queue
Given a queue of integer elements and an integer k, your task is to reverse first k elements of
the queue, leaving the other elements in same order.
Input Format
The first line of input will contains an integer T denoting the no of test cases. Then T test
cases follow. Each test case contains a number N followed by another number K.
In second line of each test case N number of elements are given in order in which they will
be inserted in queue.
The function void reverseKelementsQueue(int q[], int K) takes the queue and K as input and
reverse first K elements of the queue.
Output Format
For each test case, you have to reverse the first k elements of queue in the array given. You
are required to complete the methods given only.
Sample Input
2
4 2
1 2 3 4
5 3
10 20 30 40 50
Sample Output
2 1 3 4
30 20 10 40 50
Solution:
/*
int front=-1, rear=-1;
int array[SIZE];
void enqueue(int item);
int dequeue();
Above variables are used for queue, SIZE, front and rear and all are global variables.
Complete the below two methods. */
void reverseKelementsQueue (int q[], int K)
{
 int stack[K];
 int top=-1;
 for(int i=0;i<K;i++){
 stack[++top]=q[i];
 }
 for(int i=0;i<K;i++){
 q[i]=stack[top--];
 }
}
Department of CSE Lab Manual: HP - 22 Computer Programming - 2
112 Sanskar Chaudhary
sanskar1484.be22@chitkarauniversity.edu.in`;
  




  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Copy to Clipboard Button */}
        <button
  onClick={() => {
    navigator.clipboard.writeText(labManualText);
    alert("Lab Manual copied to clipboard!");
  }}
  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
>
  Copy Lab Manual
</button>


        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[22px] font-bold cursor-pointer flex">
            Sanskar&nbsp;<span className="sm:block hidden">Chaudhary</span>
          </p>
        </div>

        {/* Desktop Nav Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white-100" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon and Dropdown */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
