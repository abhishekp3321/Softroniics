function swap(arr){
if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 0){
let temp=arr[0];
arr[0]=arr[arr.length-1];
arr[arr.length-1]=temp;
    }
}
}
return arr;
}
console.log(swap([1,5,6,8,6]))