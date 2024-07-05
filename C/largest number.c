/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int a , b, c ;
   
    printf("enter the first number:");
    scanf("%d",&a);
    printf("enter the second number:");
    scanf("%d",&b);
    printf("enter the third number:");
    scanf("%d",&c);
    
    if(a>b && a>c)
    {
        printf("%d the largest is",a);
    }
    else if(b>a && b>c)
    {
        printf("%d the largest is",b);
    }
    else{
        printf("%d the largest is",c);
    }

     return 0;
}
