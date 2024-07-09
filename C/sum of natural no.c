#include <stdio.h>

int main() {
    int n,i,sum = 0;
    printf("enter a number");
    scanf("%d",&n);

    for(int i=0; i<=n; i++ ){
   
    sum=sum+i;
    }

    printf("sum=%d",sum);

    return 0;
}
