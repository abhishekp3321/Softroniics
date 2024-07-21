#include <stdio.h>
int main()
{
    char ch;
    int Lcasev,Ucasev;
    printf("enter the letter:");
    scanf("%c",&ch);
    Lcasev=( ch=="a"|| ch=="e"|| ch=="i"|| ch=="o"|| ch=="u");
    Ucasev=(ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U");
     if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
        if (Lcasev || Ucasev)
            printf("%c is a vowel.", ch);
        else
            printf("%c is a consonant.", ch);
    } else {
        printf("%c is not a letter.", ch);
    }
    return 0;
}