let a = [3, 3, 4, 2, 4, 4, 2, 4, 4];  
let b = null;  
let c = 0;    

for (let i = 0; i < a.length; i++) {
    if (c === 0) {
        b = a[i]; 
    } else {
        c += (a[i] === b) ? 1 : -1;
    }
}

console.log('Majority element:', b);
