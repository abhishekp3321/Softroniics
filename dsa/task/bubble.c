#include <stdio.h>

void main()
{
    int arr[7] = {10, 2, 32, 12, 11, 0, 23};
    int i, j, temp, n;
    n = sizeof(arr)/ sizeof(arr[0]);

    for (i = 1; i < n; i++)
    {

        for (j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {

                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    printf("Sorted array: ");
    for (i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
}
