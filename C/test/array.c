#include <stdio.h>
int main()
{
    int i = 0 ,j=0;
    int arr[5];
    int brr[5];
    printf("enter the 5 elements of array:");
    for(i=1;i<5;i++){
        scanf("%d",&arr[i]);
    }
    for ( i = 0; i < 5; i = i + 2)
    {
        brr[j]=arr[i];
        j++;
    }
    printf("elements at even indices");
     for(i=1;i<j;i++){
        
        printf("%d",brr[i]);
    }
    
}