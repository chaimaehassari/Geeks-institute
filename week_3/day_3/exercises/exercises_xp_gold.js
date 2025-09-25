// ===============================
// Exercise 1 : Is_Blank
// ===============================
function isBlank(str) {
    return str === "";
}

console.log(isBlank(''));     
console.log(isBlank('abc'));  


// ===============================
// Exercise 2 : Abbrev_Name
// ===============================
function abbrevName(str) {
    let parts = str.split(" ");
    return parts[0] + " " + parts[1].charAt(0).toUpperCase() + ".";
}

console.log(abbrevName("Robin Singh")); 


// ===============================
// Exercise 3 : SwapCase
// ===============================
function swapCase(str) {
    let swapped = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    return swapped;
}

console.log(swapCase('The Quick Brown Fox')); 


// ===============================
// Exercise 4 : Omnipresent value
// ===============================
function isOmnipresent(arr, val) {
    for (let subArr of arr) {
        if (!subArr.includes(val)) {
            return false;
        }
    }
    return true;
}

// ===============================
// Exercise 5 : Red table
// ===============================
let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    let diagonalCell = row.cells[i];
    diagonalCell.style.backgroundColor = "red";
}
