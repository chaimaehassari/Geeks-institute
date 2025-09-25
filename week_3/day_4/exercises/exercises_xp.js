// ===================
// Exercice 1
// ===================
let monArticle = document.querySelector("article");
let monH1 = document.querySelector("h1");
console.log(monH1);
let p = document.querySelectorAll("p");
monArticle.removeChild(p[p.length - 1]);
let h2 = document.querySelector("h2");
h2.addEventListener("click", function() {
    h2.style.backgroundColor = "red";
});
let h3 = document.querySelector("h3");
h3.addEventListener("click", function() {
    h3.style.display = 'none';
});
let btn = document.createElement("button");
btn.textContent = "Mettre en gras";
monArticle.after(btn);
btn.addEventListener("click", function() {
    p.forEach(par => {
        par.style.fontWeight = "bold";
    });
});
monH1.addEventListener("mouseover", function() {
    let randomSize = Math.floor(Math.random() * 100);
    monH1.style.fontSize = randomSize + "px";
});
let p2 = document.querySelectorAll("p")[1];
p2.addEventListener("mouseover", function() {
    p2.style.transition = "opacity 1s ease";
    p2.style.opacity = 0;
});
p2.addEventListener("mouseout", function() {
    p2.style.opacity = 1;
});

// ===================
// Exercice 2
// ===================
const form = document.querySelector("form");
console.log(form);
let inputFname = document.getElementById("fname");
let inputLname = document.getElementById("lname");
console.log(inputFname, inputLname);
let inputFnameByName = document.getElementsByName("firstname");
let inputLnameByName = document.getElementsByName("lastname");
console.log(inputFnameByName, inputLnameByName);
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstNameValue = inputFname.value.trim();
    const lastNameValue = inputLname.value.trim();
    if (firstNameValue === "" || lastNameValue === "") return;
    const ul = document.querySelector('.usersAnswer');
    ul.innerHTML = "";
    const liFname = document.createElement('li');
    liFname.textContent = firstNameValue;
    const liLname = document.createElement('li');
    liLname.textContent = lastNameValue;
    ul.appendChild(liFname);
    ul.appendChild(liLname);
});

// ===================
// Exercice 3
// ===================
let allBoldItems = [];
function getBoldItems() {
    allBoldItems = document.querySelectorAll('p strong');
}
function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    });
}
function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    });
}
const prg = document.querySelectorAll('p')[0];
getBoldItems();
prg.addEventListener('mouseover', highlight);
prg.addEventListener('mouseout', returnItemsToDefault);

// ===================
// Exercice 4
// ===================
const formSphere = document.getElementById('MyForm');
if (formSphere) {
    formSphere.addEventListener('submit', function(event) {
        event.preventDefault();
        const radiusInput = document.getElementById('radius');
        const volumeInput = document.getElementById('volume');
        const radius = parseFloat(radiusInput.value);
        if (isNaN(radius) || radius <= 0) {
            alert("Please enter a valid positive radius");
            return;
        }
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volumeInput.value = volume.toFixed(2);
    });
}
