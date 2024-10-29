#include<stdio.h>
void main(){
    int i,j,n;
        int arr[50];
        printf("enter the no of elements:");
        scanf("%d",&n);

        printf("enter %d elements:",n);
        for(i=0;i<n;i++)
        {
        scanf("%d",&arr[i]);
        }
        printf("duplicate elemments:");
        for(i=0;i<n;i++)
        {
            for(j=i+1;j<n;j++){
                if(arr[i]==arr[j]){
                    printf("%d",arr[i]);
                     break;
                }
               
            }
        }
       
}