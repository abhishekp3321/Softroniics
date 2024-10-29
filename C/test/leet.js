const string = "leetcode"
const lower = string.toLowerCase()
let index = -1
for (let i = 0; i < string.length; i++) {
    letter = string[i]
    if (string.indexOf(letter) === string.lastIndexOf(letter)) {
        index = i
        break;
    }
}
console.log(index);