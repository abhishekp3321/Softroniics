#include <stdio.h>
int main()
{
    int n,i,j;
    printf("enter the number=");
    scanf("%d", &n);
        for (int j = 0; j <= n; j++)
        {
             printf("* ");

        }
        printf("\n");
    
    for(i=n-1;i>=1;i--)
    {
        for(j=1;j<=i;j++){

        
        printf("  ");
        }
         printf("* \n");
    }
     for (int j = 0; j <= n; j++)
        {
             printf("* ");

        }
        
    
   
return 0;
}