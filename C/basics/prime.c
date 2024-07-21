#include <stdio.h>
int main()
{
    int num;
    int isprime = 1;
    printf("enter a prime number:");
    scanf("%d",&num);

    if (num <= 1)
    {
        isprime = 0;
    }
    else
    {
        int divisor = num / 2;
        while (divisor > 1)
        {
            if (num % divisor == 0)
            {
                isprime = 0;
                break;
            }
            divisor--;
        }
    }
    if (isprime)
    {
        printf("you enter the number is prime");
        
    }else{
        printf("you enter the number is not prime");
    }
    
    return 0;
}