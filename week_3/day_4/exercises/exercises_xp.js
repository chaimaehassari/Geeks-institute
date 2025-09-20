// ===== Exercise 1
<article>
    <h1> Some Facts </h1>
    <h2> The Chocolate </h2>
    <h3> History of the chocolate </h3>
    <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
    Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
    <p> After the European discovery of the Americas, chocolate became 
    very popular in the wider world, and its demand exploded. </p>
    <p> Chocolate has since become a popular food product that millions enjoy every day, 
    thanks to its unique, rich, and sweet taste.</p> 
    <p> But what effect does eating chocolate have on our health?</p> 
</article>

    let monArtucle = document.querySelector("article");
let monH1 = document.querySelector("h1");
console.log(monH1);
let p = document.querySelectorAll("p");
monArtucle.removeChild(p[p.length - 1]);
let h2 = document.querySelector("h2");
h2.addEventListener("click", function() {
    h2.style.backgroundColor = "red";
});
let h3 = document.querySelector("h3");
h3.addEventListener("click", function() {
    h3.style.display = 'none';
});

let btn = document.createElement("button");
btn.textContent = "change";
monArtucle.After(btn);
let pg = document.querySelectorAll("p")
btn.addEventListener("click", function() {
    pg.forEach(p => {
        p.style.fontWeight = "bold";
    });

});

h1.addEventListener("mouseover", function() {
    let randomSize = Math.floor(Math.random() * 100);
    h1.style.fontSize = randomSize + "px";
});

let p2 = document.querySelectorAll("p")[1];
// .fade{
//     opacity: 0;
//     transition: opacity 1s ease;
// }
//
p2.addEventListener("mouseouver", function() {
    p2.classList.add("fade");
});

p2.addEventListener("mouseout", function() {
    p2.classList.remove("fade");
});

// ===== Exercise 2
{
    /* <form>
      <label for="fname">First name:</label><br>
      <input type="text" id="fname" name="firstname"><br>
      <label for="lname">Last name:</label><br>
      <input type="text" id="lname" name="lastname"><br><br>
      <input type="submit" value="Submit" id="submit">
    </form> 
    <ul class="usersAnswer"></ul> */
}
const form1 = document.querySelector("form");
console.log(form1);
let input1 = document.getElementById("fname");
let input2 = document.getElementById("lname");
console.log(input1, input2);
let input1N = document.getElementsByName("firstname");
let input2N = document.getElementsByName("lastname");
console.log(input1N, input2N)
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

// ===== Exercise 3 Transform the sentence
<p > < strong > Hello </strong> I hope you are enjoying <strong>this</strong > class.At the <strong > end </strong> you <strong>will</strong > be great Developers!
    <strong > Enjoy </strong> the <strong>JavaScript </strong > lessons </p>

let allBoldItems = [];

function getBoldItems() {
    allBoldItems = document.querySelectorAll('p strong');
}

function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = 'bleu'
    })
}

function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    });
}
const prg = document.querySelector('p');
getBoldItems();
prg.addEventListener('mouseouver', highlight);
prg.addEventListener('mouseout', returnItemsToDefault);


// ===== Exercise 4 Volume of a Sphere

const form = document.getElementById('MyForm');

form.addEventListener('submit', function(event) {
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

