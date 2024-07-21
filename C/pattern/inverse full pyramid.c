#include <stdio.h>
int main()
{
    int row, i, j;
    printf("enter the number:");
    scanf("%d", &row);
    for (int i =row; i >=1; i--)
    {

        for (j = 1; j <= row - i; j++)
        {

            printf(" ");
        }
        for (j = 1; j <= 2 * i - 1; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}