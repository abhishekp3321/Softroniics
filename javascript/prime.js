function isprime(n){
    if (n<2) {
             return false
    }
    for (let i = 2; i < n; i++) {
        if (n % 2 === 0){
            return false
        }
    
        
    }
    return true
}
const num = parseInt(prompt("Enter a number:"));

if (isprime(num)) {
  console.log(`${num} is a prime number.`);
} else {
  console.log(`${num} is not a prime number.`);
}
