#include <stdio.h>
int main(){
    int i,n,largest,sec_largest,arr[100];
    printf("enter the size of the array:");
    scanf("%d",&n);
    printf("enter the elements of the array");
    for( i = 0; i < n; i++)
    {
        scanf("%d",&arr[i]);
    }
    largest=arr[0];
    sec_largest=arr[1];
    for (i = 0; i < n ; i++)
    {
       if(arr[i]>largest)
       {
        sec_largest=largest;
        largest=arr[i];
       }
       else if (arr[i]>sec_largest && arr[i]!=largest)
       {
        sec_largest=arr[i];
       }
       
    }
    printf("largest=%d,second largest=%d",largest,sec_largest);
    

    
}