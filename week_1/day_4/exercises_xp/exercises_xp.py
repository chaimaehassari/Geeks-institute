# ------ Exercise 1

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} se promène simplement.'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamois(Cat):
    def sing(self, sounds):
        return f'{sounds}'


chat_bengal = Bengal("Tigrou", 2)
chat_chartreux = Chartreux("Bleu", 4)
chat_siamois = Siamois("Sia", 3)

all_cats = [chat_bengal, chat_chartreux, chat_siamois]

sara_pets = Pets(all_cats)

sara_pets.walk()
# ------ Exercise 2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        if my_power > other_power:
            return f"{self.name} won the fight"
        elif my_power < other_power:
            return f"{other_dog.name} won the fight"
        else:
            return "It's a tie!"

# Création de 3 chiens
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 15)
dog3 = Dog("Max", 4, 25)

# Test des méthodes
print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

print(f"{dog1.name} speed: {dog1.run_speed()}")
print(f"{dog2.name} speed: {dog2.run_speed()}")
print(f"{dog3.name} speed: {dog3.run_speed()}")

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))
# ------ Exercise 3

import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dog_names):
        names = ', '.join([self.name] + [dog.name for dog in dog_names])
        print(f"{names} jouent tous ensemble.")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} fait un tonneau.",
                f"{self.name} se tient sur ses pattes arrière.",
                f"{self.name} te serre la main.",
                f"{self.name} fait le mort."
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} n'est pas encore entraîné pour faire un tour.")

# Exemple d'utilisation
petdog1 = PetDog("Rex", 5, 20)
petdog2 = PetDog("Buddy", 3, 15)
petdog3 = PetDog("Max", 4, 25)

petdog1.train()
petdog1.play(petdog2, petdog3)
petdog1.do_a_trick()
# ------ Exercise 4


class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Félicitations à la famille {self.last_name} pour la naissance de {kwargs.get('name', 'un enfant')} !")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Famille {self.last_name}")
        for member in self.members:
            print(member)

# Exemple d'utilisation
membres = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]

ma_famille = Family("Dupont", membres)
ma_famille.family_presentation()
print(ma_famille.is_18("Michael"))  # True
print(ma_famille.is_18("Sarah"))    # True

ma_famille.born(name="Emma", age=0, gender="Female", is_child=True)
ma_famille.family_presentation()
# ------ Exercise 5


class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']} utilise son pouvoir : {member['power']}")
                else:
                    raise Exception(f"{member['name']} n'a pas 18 ans !")
                return
        print(f"Membre {name} non trouvé.")

    def incredible_presentation(self):
        print("Voici notre famille puissante !")
        super().family_presentation()
        for member in self.members:
            print(f"Nom incroyable : {member.get('incredible_name', 'Aucun')} - Pouvoir : {member.get('power', 'Aucun')}")

# Exemple d'utilisation
incredibles_members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'voler','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'lire dans les pensées','incredible_name':'SuperWoman'}
]

famille_incroyable = TheIncredibles("Incredibles", incredibles_members)
famille_incroyable.incredible_presentation()

# Ajout de Baby Jack
famille_incroyable.born(name="Jack", age=0, gender="Male", is_child=True, power="Pouvoir inconnu", incredible_name="BabyJack")
famille_incroyable.incredible_presentation()
# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
