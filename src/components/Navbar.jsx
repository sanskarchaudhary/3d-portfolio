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





  const labManualText = `

Aim: Swap two variables
Solution:
#include <stdio.h>
int main()
{
 int a,b,c;
 scanf("%d %d",&a,&b);
 c=a;
 a=b;
 b=c;
 printf("%d\n%d",a,b);
 return 0;
}

Aim: Swap two variables without using a third variable

Solution:
#include <stdio.h>
int main()
{
 int a,b;
 scanf("%d %d",&a,&b);
 a=a+b;
 b=a-b;
 a=a-b;
 printf("%d\n%d",a,b);
 return 0;
}

Aim: Sum of all the digits of a number

Solution:
#include <stdio.h>
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

 return 0;
}

Aim: Form a number

Solution:
#include <stdio.h>
int main(){
 int t,n,end=0,i=0;
 scanf("%d",&t);
 while(i<t){
 scanf("%d",&n);
 end=end*10+n;
 i++;
 } printf("%d\n",end);
 return 0;
}

Aim: Compare reverse and original number

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

 }
 return 0;
}

Aim: Sum of a set of numbers

Solution:
#include <stdio.h>

int main()
{
int i,n,x,s=0;
 scanf("%d",&n);
 for(i=0;i<n;i++){
 scanf("%d",&x);
 s=s+x;
 }
 printf("%d",s);

 return 0;
}

Aim: Counting

Solution:
#include <stdio.h>

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

 return 0;
}

Aim: Generate Prime numbers

Solution:
#include <stdio.h>
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
 return 0;
}

Aim: Add one to each digit of a number
Solution:
#include <stdio.h>
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
 return 0;
}

Aim: Prime factors of a number

Solution:

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

Aim: Greatest Common divisor of two integers
Solution:
int gcd(int i, int j){
 int x;
 for(int k=1;k<=i;k++){
 if(i%k==0&&j%k==0){
 x=k;
 }
 }
 return x;
}

Aim: Square root of a number
Solution:
#include <stdio.h>
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

Aim: Binary To Decimal Conversion
Solution:
int binaryToDecimal(char binary[]) {
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

Aim: Three Consecutive
Solution:
int threeConsecutive(int a, int b, int c)
{
 if((a+1==b && b+1==c) || (a+1==c && c+1==b) || (b+1==a && a+1==c) || (c+1==a &&
a+1==b))
 return 1;
 else
 return 0;
 }

Aim: Factorial using recursion
Solution:
int factorial(int n) {
 if(n==0)
 {
 return 1;
 }
 return factorial(n-1)*n;
}

Aim: Sum of all the digits using recursion
Solution:
int sumOfDigits(int n)
{
 if(n==0)return 0;
 return n%10 + sumOfDigits(n/10);
}

Aim: Prime factors using recursion
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

Aim: power(base, exp)
Solution:
long power(int base, int exp) {
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

Aim: Form a new number
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

Aim: Binary equivalent using recursion
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

Aim: Greatest common divisor using recursion
Solution:
int gcd(int i, int j)
{
 if(j==0) return i;
 else
 return gcd(j,i%j);
}

Aim: Second Maximum in an Array
Solution:
#include <stdio.h>
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
 return 0;
}

Aim: Cut the sticks
Solution:
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
 a++;
 }
 for(int i=0;i<a;i++)
 {
 lengths[i] = temp[i];
 }
 *result_size = a;
 return lengths;
}

Aim: Kth largest number
Solution:
int kthLargest(int arr[], int size, int k) {
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

Aim: Merge two Arrays
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

Aim: Find all pairs with sum K
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

Aim: Find first occurrence of an integer in a sorted list with duplicates
Solution:
#include <stdio.h>
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
 break;
 }
 }
 if(c==0)
 printf("-1\n");
 }
 return 0;
}
Aim: Find count of a number in a sorted list with duplicates
Solution:
#include <stdio.h>
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
 }
 printf("%d\n",c);
 }
 return 0;
}
Aim: Rotation count of a sorted Array
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
Aim: Search element in a rotated sorted array
Solution:
int searchRotatedSortedArray(int arr[], int n, int k) {
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
 return -1;
}
Aim: Find Missing Element
Solution:
int getMissingElement(int A[], int A_size, int B[], int B_size) {
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
Aim: Find the number of swaps in Bubble Sort
Solution:
#include <stdio.h>
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
 return 0;
}
Aim: Find the number of swaps in Selection Sort
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

Aim: Find the numbers of shifts in Insertion sort
Solution:
#include <stdio.h>
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

Aim: Sort an array using merge sort
Solution:
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
void mergeSort(int array[], int l, int r) {
 if(l<r)
 {
 int mid = (l+r)/2;
 mergeSort(array,l,mid);
 mergeSort(array,mid+1,r);
 merge(array,l,mid,r);
 }
}

Aim: Sort an array using quick sort

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

Aim: Matrix Multiplication
Solution:
void multiplyMatrix(int A[SIZE][SIZE],int B[SIZE][SIZE],int R1,int C1,int R2,int C2)
{
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

Aim: Row or Column sum
Solution:
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

Aim: Spirally traversing a matrix
Solution:
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

Aim: Rotate a 2-D array by 90 degrees
Solution:
#include <stdio.h>
int main()
{
 int t;
 scanf("%d",&t);
 while(t--)
 {
 int n;
 scanf("%d",&n);
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
 return 0;
}

Aim: Implement strcmp function
Solution:
int strcmp(const char* str1, const char* str2) {
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

Aim: Implement strcat function
Solution:
void strcatCode(char* str1, char* str2) {
 char* c = strcat(str1,str2);
}

Aim: Implement atoi and itoa functions
Solution:
void itoa(int num, char* result) {
 sprintf(result , "%d" , num);
}
int atoi(char *str) {
 return strtol(str , NULL ,10);
}

Aim: Unique characters or not
Solution:
int isUniqueChars(char *str){
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

Aim: String is palindrome or not
Solution:
int isPalindrome(char *str) {
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

Aim: Reverse a string
Solution:
void reverseString (char str[]) {
 int len = strlen(str);
 for(int i=0;i<len/2;i++)
 {
 char temp = str[i];
 str[i] = str[len-1-i];
 str[len-1-i]= temp;
 }
}

Aim: Implement strstr function
Solution:
int strstrCode(char *str1, char *sub) {
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

Aim: String at end or not
Solution:
int strAtEnd(char *str, char* suffix) {
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

Aim: Reduce the given sequence
Solution:
void reduceSequence(char *str, char ch){
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
 }
 temp[j]='\0';
 strcpy(str,temp);
}

Aim: Technical Issue With The Keyboard
Solution:
void getDesiredString(char *str) {
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

Aim: Count words
Solution:
int countWords(char str[]) {
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

Aim: Reverse the words of a string
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

Aim: Reverse the order of words of a string
Solution:
void revWordsOrder(char *str) {
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
 strcpy(str,temp);
}

Aim: String is subsequence or not
Solution:
int strSubsequence(char *str1, char* str2) {
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

Aim: Implement strtok function
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
 }
return 0;
}

Aim: Spell the number
Solution:
void intToWord(int num) {
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
Aim: Sort the strings lexicographically
Solution:
#include<string.h>
void sortStrings(int n, char str[][50]) {
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
 }
 }
 }
 for(int i=0;i<n;i++)
 {
 printf("%s",str[i]);
 if(i<n-1) printf(" ");
 }
}
Aim: Check if strings are rotations or not
Solution:
int isRotation(char *str1, char *str2) {
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

Aim: Count the set bits of a number
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

Aim: Toggle the number except kth bit
Solution:
int toggleExceptKthBit(int n,int k){
 int mask=(1<<k);
 int toggled=n^(~0);
 return toggled ^ mask;
}

Aim: Find the odd man out
Solution:
int findOddMan(int n, int arr[]) {
 int xor = 0;
 for(int i=0;i<n;i++)
 {
 xor = xor ^ arr[i];
 }
 return xor;
}

Aim: Find the two strange elements
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

Aim: Saving the Earth with Binary Fever
Solution:
int getMinJumps(unsigned long long int n) {
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
}

Aim: Which flight to take
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

 scanf("%d", &n);
 struct fDetails flight[n];
 for (int i = 0; i < n; i++) {
 scanf("%s", flight[i].num);
 scanf("%s", flight[i].dep);
 scanf("%d", &flight[i].dur);
 scanf("%d", &flight[i].price);
 }
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

Aim: Calculate the Total amount to be given
Solution:
#include <stdio.h>
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
 return 0;
}

Aim: Calculate the nextdate of a given date
Solution:
#include <stdio.h>
struct Date {
 int day;
 int month;
 int year;
};
int isLeapYear(int year) {
 return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}
int maxDay(int month, int year) {
 if (month == 2) {
 return isLeapYear(year) ? 29 : 28;
 }
 else if (month == 4 || month == 6 || month == 9 || month == 11) {
 return 30;
 }

 else {
 return 31;
 }
}
void nxtdate(struct Date date) {
 int maxDays = maxDay(date.month, date.year);
 date.day++; 
 if (date.day > maxDays) {
 date.day = 1;
 date.month++; 
 if (date.month > 12) {
 date.month = 1;
 date.year++; 
 }
 }
 printf("%02d-%02d-%04d\n", date.day, date.month, date.year);
}
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


Aim: Print the lines from file
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
 while (fgets(lines[num_lines], MAX_LINE_LENGTH, fp) != NULL && num_lines <
MAX_LINES) {
 int line_length = strlen(lines[num_lines]);
 if (lines[num_lines][line_length - 1] == '\n') {
 lines[num_lines][line_length - 1] = '\0';
 }
 num_lines++;
 }
 fclose(fp);
 for (int i = 0; i < num_lines; i += 2) {
 printf("%s\n", lines[i]);
 }
 for (int i = 1; i < num_lines; i += 2) {
 printf("%s\n", lines[i]);
 }
}
int main() {
 char filename[100];
 scanf("%s", filename);
 print_odd_even_lines(filename);
 return 0;
}

Aim: Capitalize First Letter of every Word in a File
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
 int prev_char = ' '; 
 int current_char;
 while ((current_char = fgetc(input)) != EOF) {
 if (prev_char == ' ' || prev_char == '\n' || prev_char == '\t') {
 current_char = toupper(current_char);
 }
 fputc(current_char, output);
 prev_char = current_char;
 }
 fclose(input);
 fclose(output);
}

Aim: Compare two Files, print the location of first byte that they differ
Solution:
int compare_two_files(FILE *f1, FILE *f2) {
 int byte_number = 0; 
 while (1) {
 int byte1 = fgetc(f1);
 int byte2 = fgetc(f2);
 if (byte1 == EOF && byte2 == EOF) {
 return -1; 
 }
 if (byte1 != byte2) {
 return byte_number; 
 }
 byte_number++;
 if (byte1 == EOF || byte2 == EOF) {
 return byte_number;
 }
 }
}

Aim: Count No of Lines & Blank Lines in a given text file
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
 int is_blank_line = 1; 
 while ((c = fgetc(file)) != EOF) {
 if (c == '\n') {
 total_lines++;
 if (is_blank_line) {
 blank_lines++;
 }
 is_blank_line = 1;
 } else if (c != ' ' && c != '\t' && c != '\r') {
 is_blank_line = 0; 
 }
 }
 if (is_blank_line) {
 blank_lines++;
 }
 printf("%d %d\n", total_lines, blank_lines);

 fclose(file);
}

Aim: Append the Content of File at the end of Another file
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
 while ((ch = fgetc(file1)) != EOF)
 fputc(ch, file3);
 if (ch != '\n')
 fputc('\n', file3);
 while ((ch = fgetc(file2)) != EOF)
 fputc(ch, file3);
 fclose(file1);
 fclose(file2);
 fclose(file3);
}

Aim: Delete a specific Line from a Text File
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
 int line_count = 0;
 char ch;
 while ((ch = fgetc(file)) != EOF) {
 if (ch == '\n')
 line_count++;
 }

 rewind(file);
 int i;
 for (i = 0; i < T; i++) {
 int line_number;
 scanf("%d", &line_number);
 if (line_number > line_count) {
 printf("-1\n");
 } else {
 FILE* temp_file = fopen("temp.txt", "w");
 if (temp_file == NULL) {
 printf("Error creating temporary file.\n");
 fclose(file);
 return 0;
 }
 int current_line = 1;
 char line[1000];
 while (fgets(line, sizeof(line), file)) {
 if (current_line != line_number)
 fputs(line, temp_file);
 current_line++;
 }
 fclose(temp_file);
 fclose(file);
 remove(file_name);
 rename("temp.txt", file_name);
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

Aim: Reverse the Content of File and Print it
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

Aim: Implement the stack using array
Solution:
int isFull()
{
 return top == (SIZE-1);
}
int isEmpty()
{
 return top == -1;
}
int push(int item)
{
 if (isFull())
 {
 return -1;
 }
 Stack[++top] = item;
 return Stack;
}
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


Aim: Reverse a string using stack
Solution:
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

Aim: Implement the queue using array
Solution:
void enqueue(int item)
{
 if(rear == SIZE - 1)

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

Aim: Reverse a given queue
Solution:
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

Aim: Reverse first N elements of a given queue
Solution:
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
`;
  




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
