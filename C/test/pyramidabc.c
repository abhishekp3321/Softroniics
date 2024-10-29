#include <stdio.h>

int main()
{
    int row, i, j;

    printf("Enter the number of rows: ");
    scanf("%d", &row);

    for (i = 1; i <= row; i++)
    {

        for (j = 0; j < row-i ; j++)
        {
            printf(" ");
        }

        for (j = 0; j < i-1; j++)
        {
            printf(" %c ", 'A'+ j);
        }

        printf("\n");
    }

    return 0;
}
