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
function hotelCost(){
    let nights;
    do{
        nights = parseInt(prompt("Enter number of nights:"));
    } while(isNaN(nights) || nights <= 0);
    return nights * 140;
}
function planeRideCost(){
    let destination;
    do{
        destination= prompt("Enter your destination:");

    }while(!isNaN(destination) || destination.trim() === "");
    if(destination=="London"){
        return 183;
    }
    else if(destination=="Paris"){
        return 220;
    }

    else{
        return 300;
    }
}
function rentalCarCost(){
    let days;
    do{
        days = parseInt(prompt("Enter number of days:"));
    }while(isNaN(days) || days <= 0);
    let cost = days * 40;
    if(days > 10){
        cost *= 0.5;
    }
    return cost;
}
function totalVacationCost(){
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();
    let total = hotel + plane + car;
    console.log("The car cost: $" + car);
    console.log("The hotel cost: $" + hotel);
    console.log("The plane tickets cost: $" + plane);
    console.log("Total vacation cost: $" + total);
    return total;
}

// ===== Exercise 5
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
// ===== Exercise 6
const navbar = document.getElementById("navBar");
navbar.setAttribute("id","socialNetworkNavigation");
const newElement = document.createElement("li");
const newText=document.createTextNode("Logout");
newElement.appendChild(newText);
navbar.getElementsByTagName("ul")[0].appendChild(newElement);
const ul = nav.querySelector("ul");
console.log("Premier élément :", ul.firstElementChild.textContent);
console.log("Dernier élément :", ul.lastElementChild.textContent);
// ===== Exercise 7
{/* <section class="listBooks"></section> */}
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
    alreadyRead: true
  },
  {
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    image: "https://m.media-amazon.com/images/I/71Aua2I3Z8L.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const div = document.createElement("div");
  const details = document.createElement("p");
  details.textContent = `${book.title} écrit par ${book.author}`;

  if (book.alreadyRead) {
    details.style.color = "red";
  }

  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  div.appendChild(details);
  div.appendChild(img);

  section.appendChild(div);
});
