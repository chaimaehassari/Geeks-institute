# ------ Exercise 1
print("Hello World")
# ------ Exercise 2
print((99 ** 3) * 8)
# ------ Exercise 3
mon_prenom = "Chaimae"  
nom_utilisateur = input("Comment t'appelles-tu ? ")
if nom_utilisateur== mon_prenom:
    print(" On a le même nom!")
else:
    print(f"Enchanté de te rencontrer, {nom_utilisateur}  Mais mon nom est plus cool ")
   
# ------ Exercise 4
hauteur = int(input("Entrez votre hauteur en cm : "))
if hauteur > 145:
    print("Vous êtes assez grand pour faire le grand huit ! ")
else:
    print("Désolé, il faut que vous grandissiez encore un peu pour faire le tour. ")
# ------ Exercise 5
my_fav_numbers = {7, 13, 21, 42, 88}
print("Mes numéros préférés :", my_fav_numbers)
my_fav_numbers.add(99)
my_fav_numbers.add(3)
print("Après l'ajout de deux nombres :", my_fav_numbers)
my_fav_numbers.remove(3)
print("Après la suppression du nombre 3 :", my_fav_numbers)
friend_fav_numbers = {5, 10, 15, 20, 25, 7}  
print("Numéros préférés de l'ami :", friend_fav_numbers)
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("numéros préférés combinés :", our_fav_numbers)
# ------ Exercise 6

my_tuple = (1, 2, 3)
print("Tuple initial :", my_tuple)
my_tuple = my_tuple + (4, 5)  
print("Tuple après ajout :", my_tuple)

# ------ Exercise 7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print("Liste initiale :", basket)
basket.remove("Banana")
print("Après suppression de Banana :", basket)
basket.remove("Blueberries")
print("Après suppression de Blueberries :", basket)
basket.append("Kiwi")
print("Après ajout de Kiwi :", basket)
basket.insert(0, "Apples")
print("Après ajout de Apples au début :", basket)
apple_count = basket.count("Apples")
print("Nombre de Apples dans le panier :", apple_count)
basket.clear()
print("Panier après vidage :", basket)

# ------ Exercise 8

sandwich_orders = [
    "Sandwich au thon",
    "Sandwich pastrami",
    "Sandwich à l'avocat",
    "Sandwich pastrami",
    "Sandwich aux œufs",
    "Sandwich au poulet",
    "Sandwich pastrami"
]

while "Sandwich pastrami" in sandwich_orders:
    sandwich_orders.remove("Sandwich pastrami")

print("Commandes restantes :", sandwich_orders)

finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)  

for sandwich in finished_sandwiches:
    print(f"J'ai préparé votre {sandwich.lower()}")
