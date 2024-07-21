/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int day;
    do{
    printf("enter a number (1-7):");
    scanf("%d",&day);
    switch(day)
    {
        case 1:
        printf("%d day is monday",day);
        break;
        
          case 2:
        printf("%d day is tuesday",day);
        break;
        
          case 3:
        printf("%d day is wednesday",day);
        break;
        
          case 4:
        printf("%d day is thrusday",day);
        break;
        
          case 5:
        printf("%d day is friday",day);
        break;
        
          case 6:
        printf("%d day is saturday",day);
        break;
        
          case 7:
        printf("%d day is sunday",day);
        break;
        
        default:("this is a invalid number please enter number between 1-7");
        }
  
    } while(day<1||day>7);
    return 0;
}
