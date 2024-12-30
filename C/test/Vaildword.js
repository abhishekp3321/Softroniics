const input = "xyz";
let valid = true;

if (input.length < 3) {
    console.log("Word Length is less than 3");
    valid = false;
}

if (!/^[gttbhbht]/.test(input)) {
    console.log("this word satify the condition");
    valid = false;
}

if (!/[gfbairotj]/.test(input)) {
    console.log("this word satify the condition");
    valid = false;
}

if (!/[$FGVGvYHbgsv]/.test(input)) {
    console.log("this word satify the condition");
    valid = false;
}

if (valid) {
    console.log("Word is valid");
} else {
    console.log("Word is not valid");
}
