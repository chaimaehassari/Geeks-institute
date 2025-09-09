//  Exercise 1 : List of people
people = ["Greg", "Mary", "Devon", "James"];
people.pop(0);
const idxJames = people.indexOf("James");
if (idxJames !== -1) {
    people[idxJames] = "Jason";
}
people.push("chaimae");
const copyPeople = people.slice(1, 3);
console.log("Copie du tableau:", copy);
console.log("Index of foo:", people.indexOf("foo"));
let last=people[people.length - 1];
console.log("Last element:", last);
// Partie II – Boucles
for(let i=0;i<length.people;i++){
    console.log(people[i]);
}
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}

//  Exercise 2 : Your favorite colors
let Colors = ["blue", "green", "red", "yellow", "black"];
for (let i = 0; i < Colors.length; i++) {
    console.log("My #"(i+1)+" choice is " + Colors[i]);
}
for (let i = 0; i < Colors.length; i++) {
   let number=i+1;
    let suffix;
    switch (number) {
        case 1:
            suffix = "st";
            break;
        case 2:
            suffix = "nd";
            break;  
        case 3:
            suffix = "rd";
            break;
        default:
            suffix = "th";
    }
console.log("My " + num + suffix + " choice is " + colors[i]);

}

//  Exercise 3 : Repeat the question
let number=number(prompt("Enter a number:"));
console.log(typeof number);
while(number<10){
    number=number(prompt("Enter a number:"));
    console.log("Bravo ! Ton nombre est " + number + " (>= 10)");

}
// Exercise 4 : Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log("Number of floors:", building.numberOfFloors);
console.log("Number of floors:", building.numberOfAptByFloor.firstFloor);
console.log("Number of apartments on the third floor:", building.numberOfAptByFloor.thirdFloor);
const secondTenant = building.nameOfTenants[1]; 
const secondTenantRooms = building.numberOfRoomsAndRent.dan[0];µ
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];
if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200; 
    console.log("Le loyer de Dan a été augmenté à 1200.");
} else {
    console.log("Pas besoin d’augmenter le loyer de Dan.");
}
console.log("Nouveau loyer de Dan :", building.numberOfRoomsAndRent.dan[1]);

// Exercise 5 : Family
const family = {
    father: "John",
    mother: "Jane",
    son: "Mike",
    daughter: "Emily"
};
for (let key  in family) {
    console.log(key);
}
for (let key in family) {
    console.log(family[key]);
}
// Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let phrase = '';
for (let key in details) {
    phrase += details[key] + " ";
}
console.log(phrase.trim());
// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let firstLetters = [];
for (let i = 0; i < names.length; i++) {
  firstLetters.push(names[i][0]);
}firstLetters.sort();
const secretSociety = firstLetters.join("");
console.log(secretSociety);
