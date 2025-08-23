# ------ Exercise 1
cles = ['Dix', 'Vingt', 'Trente']
valeurs = [10, 20, 30]
mon_dict = dict(zip(cles, valeurs))
print(mon_dict)  

# ------ Exercise 2

famille = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}

total = 0

for nom, age in famille.items():
    if age < 3:
        prix = 0
    elif age <= 12:
        prix = 10
    else:
        prix = 15
    print(f"{nom} doit payer {prix}$")
    total += prix

print("Total famille :", total, "$")

# ------ Exercise 3
brand = {
    "nom": "Zara",
    "date_creation": 1975,
    "createur": "Amancio Ortega Gaona",
    "vetements": ["hommes", "femmes", "enfants", "maison"],
    "concurrents": ["Gap", "H&M", "Benetton"],
    "magasins": 7000,
    "couleurs": {"France": "bleu", "Espagne": "rouge", "US": ["rose", "vert"]}
}

brand["magasins"] = 2

print(f"Zara vend des vêtements pour {', '.join(brand['vetements'])}.")

brand["pays_creation"] = "Espagne"

if "concurrents" in brand:
    brand["concurrents"].append("Desigual")

del brand["date_creation"]

print("Dernier concurrent :", brand["concurrents"][-1])

print("Couleurs US :", brand["couleurs"]["US"])

print("Nombre de clés :", len(brand))

print("Clés :", brand.keys())

plus_zara = {"date_creation": 1975, "magasins": 10000}
brand.update(plus_zara)

print("Nombre de magasins :", brand["magasins"])

# ------ Exercise 4
def decrire_ville(ville, pays="France"):
    print(f"{ville} est en {pays}.")

decrire_ville("Paris")
decrire_ville("Reykjavik", "Islande")

# ------ Exercise 5
import random

def comparer_nombre(mon_nombre):
    aleatoire = random.randint(1, 100)
    if mon_nombre == aleatoire:
        print(f"Bravo ! Vous avez trouvé {mon_nombre}")
    else:
        print(f"Raté ! Vous avez {mon_nombre}, le nombre était {aleatoire}")

comparer_nombre(50)

# ------ Exercise 6
def faire_tshirt(taille="Grand", message="J'aime Python"):
    print(f"T-shirt taille {taille}, message : {message}")

faire_tshirt() 
faire_tshirt("Moyen") 
faire_tshirt("Petit", "Hello World")  
faire_tshirt(message="Python est génial", taille="XL")  

# ------ Exercise 7
import random

def temperature_aleatoire(saison="printemps"):
    if saison == "hiver":
        bas, haut = -10, 16
    elif saison == "printemps":
        bas, haut = 0, 23
    elif saison == "été":
        bas, haut = 16, 40
    else:  # automne
        bas, haut = 0, 32
    return random.randint(bas, haut)

def main():
    saison = input("Entrez une saison (hiver, printemps, été, automne) : ").lower()
    temp = temperature_aleatoire(saison)
    print(f"La température actuelle est {temp}°C")
    
    if temp < 0:
        print("Brrr, c'est glacial ! Habillez-vous chaudement.")
    elif temp <= 16:
        print("Il fait frais ! Prenez un manteau.")
    elif temp <= 23:
        print("Temps agréable !")
    elif temp <= 32:
        print("Il fait chaud !")
    else:
        print("Chaleur extrême !")

main()

# ------ Exercise 8
questions = [
    {"question": "Quel est le vrai nom de Baby Yoda ?", "answer": "Grogu"},
    {"question": "Où Obi-Wan a-t-il emmené Luke après sa naissance ?", "answer": "Tatooine"},
    {"question": "En quelle année est sorti le premier film Star Wars ?", "answer": "1977"},
    {"question": "Qui a construit C-3PO ?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker est devenu ?", "answer": "Darth Vader"},
    {"question": "Quelle espèce est Chewbacca ?", "answer": "Wookiee"}
]

def quiz():
    correct = 0
    incorrect = 0
    erreurs = []

    for q in questions:
        reponse = input(q["question"] + " ")
        if reponse.lower() == q["answer"].lower():
            correct += 1
        else:
            incorrect += 1
            erreurs.append({"question": q["question"], "votre": reponse, "correct": q["answer"]})

    print(f"Correct: {correct}, Incorrect: {incorrect}")

    if erreurs:
        print("Erreurs :")
        for e in erreurs:
            print(f"Question: {e['question']}")
            print(f"Votre réponse: {e['votre']}, Réponse correcte: {e['correct']}")
    
    if incorrect > 3:
        print("Vous avez plus de 3 erreurs, voulez-vous rejouer ?")

quiz()
