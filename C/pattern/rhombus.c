#include <stdio.h>

int main()
{
   int i,j,rows,s;

    printf("Enter number of rows: ");
    scanf("%d", &rows);

    for (i = 1; i <= rows; i++)
    {
        for (s = 0; s <= i; s++)
        {
            printf(" ");
        }
            for (j = 1; j <= 7; j++)
            {
                printf("* ");
            }

        printf("\n");
    }
    return 0;
}