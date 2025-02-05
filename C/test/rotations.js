let i,j;
for(i=1;i<=5;i++){
    for(k=1;k<=5-i;k++){
        process.stdout.write(" ");
    }
    for(j=1;j<=i;j++){
        process.stdout.write("*");
    }
    for(j=2;j<=i;j++){
        process.stdout.write("*");
    }
    console.log("");
}
for(i=4;i>=1;i--){
    for(k=1;k<=5-i;k++){
        process.stdout.write(" ");
    }
    for(j=1;j<=i;j++){
        process.stdout.write("*");
    }
    for(j=2;j<=i;j++){
        process.stdout.write("*");
    }
    console.log("");
}