const radius=[1,2,3];
const area=function(radius){
    return Math.PI * radius * radius;
}
const diameter=function(radius){
    return 2 * radius;
}

function calculate(radius,logic){
   let out=[];
   for(i=0;i<radius.length;i++){
    out.push(logic(radius[i]))
   }
   return out;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
