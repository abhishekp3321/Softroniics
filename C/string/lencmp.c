#include <stdio.h>
#include <string.h>

int main()
{
    char a[50];
    char b[50];

    printf("enter the first string:");
    scanf("%s", a);

    printf("enter the second string:");
    scanf("%s", b);

    printf("length of the string is:%d", strlen(a));

    if(strcmp(a,b)==0)
        printf("\n string is equal");
    else
        printf("\n string is not equal");


    return 0;
}