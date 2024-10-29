let num=[1,3,5,7];
const n=7
let miss=[];
const numset =new Set(num);
for(i=1;i<=n;i++){
    if(!numset.has(i)){
        miss.push(i)
    }
}
console.log(miss);