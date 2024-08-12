#include<stdio.h>
#include<string.h>
int main(){
    char a[50];
    printf("enter the string:");
    scanf("%s",&a);
    printf("string is %s",a);
   
    printf("\n reverse of the string %s",strrev(a));
}
