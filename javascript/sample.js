function createHelloWorld() {

    return function() {

              return "Hello World";

    };
}
let hello = createHelloWorld();

console.log( hello());
function createCounter(n){
    return function()
    {
        return n++
    };
};
let value =createCounter(5);
console.log(value());
console.log(value());
// function expect(val) {
//   function toBe(n) {
//     if (val === n) {
//       return true;
//     } else {
//       throw new error("not equal");
//     }
//   }
//   function notToBe(n) {
//     if (val !== n) {
//       return true;
//     } else {
//       throw new error(" equal");
//     }
//   }
//   return {
//     toBe,
//     notToBe
//   };
// }
