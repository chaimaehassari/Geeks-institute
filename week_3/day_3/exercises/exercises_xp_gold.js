// ===== Exercise 1
function displayNumbersDivisible(){
    let sum = 0;
    for(let i = 1; i <= 500; i++){
    if(i%23 === 0){
        console.log(i);
        sum += i;
    }
}
  console.log("Sum : " + sum);
}
displayNumbersDivisible();
// ===== Exercise 2
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList= ["banana", "orange", "apple"];
function myBill(){
    let total = 0;
    for(let item of shoppingList){
        if(item in stock && stock[item] > 0){
            total += prices[item];
            stock[item]--;
        }
       
    }
return total;
}
console.log("Total à payer : $" + myBill());

// ===== Exercise 3
function changeEnough(itemPrice, amountOfChange) {
    let som=0;
    let coins = [0.25, 0.10, 0.05, 0.01];
    for(let i=0; i<amountOfChange.length; i++){
    som += amountOfChange[i] * coins[i];
    }
    return som >= itemPrice;
}
// ===== Exercise 4
/*<div id="container">Users:</div>
<ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul>
/** */
let DIVS=document.getElementById("container");
let LIS = document.getElementsByTagName("lu")[0];
LIS.getElementsByTagName("li")[0].innerText="Richard";
LIS.getElementsByTagName("li")[1].remove();
let uls = document.querySelectorAll("ul");
uls.forEach(ul => {
    ul.getElementsByTagName("li")[0].textContent = "Chaimae";
});
uls.forEach(ul => ul.classList.add("student_list"));
uls[0].classList.add("university", "attendance");

DIVS.style.backgroundColor = "lightblue";
DIVS.style.padding = "10px";
secondUL.querySelector("li:last-child").style.display = "none";
firstUL.querySelector("li:nth-child(2)").style.border = "2px solid black";
document.body.style.fontSize = "18px";

if(DIVS.style.backgroundColor === "lightblue") {
    let usersText = containerDiv.textContent; 
    alert("Hello " + usersText + " x and y"); 
}
// ===== Exercise ...