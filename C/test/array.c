#include <stdio.h>
int main()
{
    int i = 0 ,j=0;
    char arr[5];
    char brr[5];
    printf("enter the 5 elements of array:");
    for(i=0;i<5;i++){
        scanf("%d",&arr[i]);
    }
    for ( i = 0; i < 5; i = i + 2)
    {
        brr[j]=arr[i];
        j++;
    }
    printf("elements at even indices");
     for(i=0;i<5;i++){
        
        printf("%d",brr[i]);
    }
    
}