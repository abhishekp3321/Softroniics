#include <stdio.h>
int main()
{
    char operator;
    double num1,num2,result;
    printf("enter the operator");
    scanf("%c",&operator);
    printf("enter the number :");
    scanf("%f %f",&num1,&num2);
    switch (operator)
    {
    case '+':
        result=num1+num2;
        break;
    case '-':
    result=num1-num2;
    break;
    case '*':
    result=num1*num2;
    break;
    case'/':
    if(num2 !=0);
    else{
        
    }
    default:
        break;
    }

}