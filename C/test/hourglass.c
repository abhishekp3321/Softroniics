#include <stdio.h>
int main()
{
    int i, j, s, a;
    printf("enter the number of rows");
    scanf("%d", &a);
    for (i = a; i >= 1; i--)
    {
        for (j = 0; j < a - i; j++)
        {
            printf(" ");
        }
        for (s = 1; s <= 2 * i - 1; s++)
        {
            if (s == 1 || s == 2 * i - 1 || i == a)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    for (i = 1; i <= a; i++) {
         for (j = 0; j < a - i; j++)
        {
            printf(" ");
        }
        
        for (s = 1; s <= 2 * i - 1; s++) {
            if (s == 1 || s == 2 * i - 1 || i == a) {
                printf("*");
            } else {
                printf(" ");
            }
        }
        
        
        printf("\n");
    }
    
}