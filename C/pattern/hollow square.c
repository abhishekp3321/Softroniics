#include<stdio.h>
int main(){
    int rows,i,j;
    printf("enter the number of patterns:");
    scanf("%d",&rows);
   
    for ( i = 1; i <=rows; i++)
    {
        for ( j = 1; j <=rows; j++)
        {
            if(i==1||i==rows||j==1||j==rows){
            printf("*");
        }else{
            printf(" ");
        }
        }
        printf("\n");
    }
    return 0;
    
}