let n= [8,1,2,2,3]
let a=n.map(num=>n.filter(x=>x<num).length)
console.log(a)
