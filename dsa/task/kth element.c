#include <stdio.h>

int main()
{
    int i, n;
    printf("Enter the Size of the Array:  ");
    scanf("%d", &n);

    int a[n];
    printf("Enter the %d Elements of Array :  ", n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - 1 - i; j++)
        {
            if (a[j] > a[j + 1])
            {
                int temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }

    printf("Largest Element : ");
    printf("%d ", a[n - 1]);

    return 0;
}