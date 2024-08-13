#include<stdio.h>
int main(){
    int i,a;
    int n[7];
    printf("enter the elements");
    for(i=0;i<7;i++){
    scanf("%d",&n[i]);
}
printf("enter the no of elements");
scanf("%d",&a);
for ( i = 0; i < 7; i++)
{
  if( n[i]==a){
    printf("%d index %d",a,i);
  }
}
return 0;
}