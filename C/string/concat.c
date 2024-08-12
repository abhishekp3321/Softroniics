#include<stdio.h>
#include<string.h>
int main(){
    char a[50];
    char b[50];
  printf("enter the string:");
  scanf("%s",&a);
  printf("enter the second string:");
  scanf("%s",&b);
  strcat(a,b);
  printf("value of the string is:%s",a);
}