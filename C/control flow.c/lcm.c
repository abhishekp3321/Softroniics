#include<stdio.h>
int main(){
    int a,b;
    printf("enter the 2 numbers:");
    scanf("%d %d",&a,&b);
     printf("lcm of %d and %d is :",a,b);
    for(int max=a>b?a:b; ;max++)
    {
    if(max%a==0&&max%b==0){
        printf("%d",max);
        break;
    }
    }
   
}