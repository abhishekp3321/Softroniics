// let a=("hello world")
// b=a.replace(/[aeiouAEIOU]/g,"")
// console.log(b)

let a = "234";

if (!/^[a-zA-Z0-9]+$/.test(a)) {  // Ensure it contains only letters and digits
  console.log("Invalid characters found");
} else {
  const vowels = /[aeiouAEIOU]/;
  const consonants = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;
  
  if (vowels.test(a) && consonants.test(a)) {
    console.log("contains .");
  } else {
    console.log("No vowels or no consonants found.");
  }
}