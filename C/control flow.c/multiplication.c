#include<stdio.h>
int main(){
    int num,count;
    printf("enter the number\n");
    scanf("%d",&num);
    for(count=1;count<=10;count++)
    {
        printf("%d*%d=%d\n",num,count,(num*count));
    }
    return 0;
}