 function print() {
    document.getElementById("output").innerHTML = "paragraph";
}

let a = true

console.log(typeof(a));
let num=4 ;
let result;
if(num%2==0)
    {
      result="even";
    }
    else{
      result="odd";
    }
    console.log(result);
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log ("Today is " + day);
let x="0"
switch (x) {
    case 0:
        text="off";
        break;
        case 1:
    text="on";
    break;
    default:
      text= "value is not found ";
}
console.log("text");
