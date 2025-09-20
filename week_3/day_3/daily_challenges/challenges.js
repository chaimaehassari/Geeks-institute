const planets = [
  {name: "Mercure", color: "gray", moons: 0},
  {name: "Venus", color: "yellow", moons: 0},
  {name: "Terre", color: "blue", moons: 1},
  {name: "Mars", color: "red", moons: 2},
  {name: "Jupiter", color: "orange", moons: 4},
  {name: "Saturne", color: "gold", moons: 3},
  {name: "Uranus", color: "lightblue", moons: 2},
  {name: "Neptune", color: "darkblue", moons: 1}
];

let section = document.querySelector('.listPlanets');

for (let plant of planets) {
    //  Création dyal div dyal planet
    let divPlanet = document.createElement('div');
    divPlanet.className = 'planet';
    divPlanet.style.backgroundColor = plant.color;
    divPlanet.textContent = plant.name;

    //  Création dyal moons
    for (let i = 0; i < plant.moons; i++) {
        let divMoon = document.createElement('div');
        divMoon.classList.add('moon');

        // n7seb l'angle dyal lmoon 3la cercle
        let angle = (i / plant.moons) * 2 * Math.PI;

        // n7seb radius = distance men centre lplanet lmoon
        let radius = 60; 

        // n7seb position horizontal w vertical
        divMoon.style.left = `${50 + radius * Math.cos(angle)}px`;
        divMoon.style.top = `${50 + radius * Math.sin(angle)}px`;

        // nappendi lmoon f planet
        divPlanet.appendChild(divMoon);
    }

    //  nappendi lplanet f section
    section.appendChild(divPlanet);
}
