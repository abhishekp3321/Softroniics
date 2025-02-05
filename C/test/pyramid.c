#include <stdio.h>

int main()
{
    int rows, i, j;
    int letter = 65;
    printf("Enter number of rows: ");
    scanf("%d", &rows);

    for (i = 1; i <= rows; ++i)
    {

        for (j = 1; j <= rows - i; ++j)
        {
            printf("  ");
        }

        for (j = 1; j <= 2 * i - 1; ++j)
        {
            printf("%c ", letter);
        }
        letter++;
        printf("\n");
    }
    return 0;
}