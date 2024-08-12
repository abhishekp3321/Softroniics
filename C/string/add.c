#include<stdio.h>
#include<string.h>
int main(){
    int n1,n2,sum;
    printf("enter the 1st number:");
    scanf("%d",&n1);
    printf("enter the 2nd number:");
    scanf("%d",&n2);
    sum=n1+n2;
    printf("the output is:%d+%d=%d",n1,n2,sum);
    return 0;
}