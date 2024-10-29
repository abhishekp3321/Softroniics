products = [
    { pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led' },
    { pid: 101, pName: 'samsung', band: '5g', price: 45000, display: 'led' },  
    { pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led' },
    { pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd' },
    { pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd' }
]


console.log("1");
products.map(products => console.log(products.pName));
console.log("\n");



console.log("2");
let lcd = products.filter(lcd => lcd.display === 'lcd');
lcd.forEach(a => { console.log(`PID: ${a.pid}, Name: ${a.pName}, Band: ${a.band}, Price: ${a.price}`);});
console.log("\n");


console.log("3");
let FiG = products.filter(a => a.band === '5g');
FiG.forEach(a => {
    console.log(`PID: ${a.pid}, Name: ${a.pName},Price: ${a.price}, Display: ${a.display}`);
});
console.log("\n");

console.log("4");
let price = products.filter(a => a.price > 30000)
price.forEach(a =>
    console.log(a)
)
console.log("\n");

console.log("5");
let high = products.reduce((a, b) => a.price > b.price ? a : b)
console.log("High Cost = " + high.pName);
console.log("\n");

console.log("6");
let low = products.reduce((a, b) => a.price < b.price ? a : b)
console.log("Low Cost = " + low.pName);
