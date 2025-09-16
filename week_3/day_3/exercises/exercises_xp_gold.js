// Exercise 1 : Is_Blank
function isBlank(str) {
    if(str === "") 
        return true;
    return false;
}
// Exercise 2 : Abbrev_Name
function abbrevName(firstName,lastName) {
    
    return firstName + "" +lastName.charAt(0).toUpperCase() + ".";
}

// Exercise 3 : SwapCase
function swapCase(str) {
    let swapped = '';
    for(let i = 0; i < str.length; i++) {
        let char =str.chaeAt(i);
        if(char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        }
        else {
            swapped += char.toUpperCase();
        }
    }
    return swapped;

}
// Exercise 4 : Omnipresent value
function isOmnipresent(arr, val) {
    for(let subArr of arr) {
        if(!subArr.includes(val)) {
            return false;
        }
        else {
            return true;
        }
    }
}
// Exercise 5 : Red table
let table = document.body.firstElementChild;
for(let i = 0; i < table.rows.length; i++) {
    let row=table.row[i];
    let diagonalCell = row.cells[i]; 
    diagonalCell.style.backgroundColor = "red";

}