#include<stdio.h>

int main() {

    int height;
    printf("enter the height of the person");
    scanf("%d",&height);

    if(height<150)
    {
        printf("the person is short");

    }
    else if (height>=151 && height<180)
    {
        printf("the person height is avarage");
    }
    else 
    {
        printf("the person is tall");
    }
    
    return 0;
}