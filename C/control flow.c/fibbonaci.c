#include<stdio.h>
int main(){
    int num,count,n1=0,n2=1,n3;
    printf("enter the number:");
    scanf("%d",&num);
      
    for(count=3;count<=num;count++)
    {
        n3=n1+n2;
        printf("%d\n",n3);
        n1=n2;
        n2=n3;
    }
  
    
    return 0;
}