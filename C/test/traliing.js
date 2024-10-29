let num = "51230100";
let len = num.length - 1;
while (num[len] == 0) {
  len--;
}
console.log(num.slice(0, len + 1));
