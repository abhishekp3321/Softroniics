const input = "12a34b56"
var iparr = input.split("")

for (let i = 0; i < iparr.length; i++) {
    if (isNaN(iparr[i])){ 
        iparr.splice(i,1)
        i--
    }
}
iparr = iparr.join("")
console.log(iparr);