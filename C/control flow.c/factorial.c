#include <stdio.h>
int main()
{
    int num, count, fact = 1;
    printf("enter the fact number:");
    scanf("%d", &num);
    for (count = 1; count <= num; count++)
    {
        fact = fact * count;
    }
    printf(" the number %d is:%d",num,fact);
    return 0;
}