#include <stdio.h>
#include <string.h>
int main()
{
    int i, n,single=0;
    printf("Enter No of  Elements :");
    scanf("%d", &n);
    int arr[n];
    printf("Enter %d Elements :", n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
                single^=arr[i];

    }
    printf("The Single Element is : %d",single);
    return 0;
}