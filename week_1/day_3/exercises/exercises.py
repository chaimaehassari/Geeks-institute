# ------ Exercise 1

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat1 = Cat("Mimi", 3)
cat2 = Cat("Luna", 5)
cat3 = Cat("Simba", 2)

def find_oldest_cat(*cats):
    oldest = max(cats, key=lambda c: c.age)  
    return oldest

oldest_cat = find_oldest_cat(cat1, cat2, cat3)

print(f"Le chat le plus vieux est {oldest_cat.name}, et il a {oldest_cat.age} ans.")

# ------ Exercise 2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} fait ouaf !")

    def jump(self):
        print(f"{self.name} saute {self.height * 2} cm de haut !")

davids_dog = Dog("Rex", 50)
print(f"Le chien de David s'appelle {davids_dog.name} et mesure {davids_dog.height} cm.")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"Le chien de Sarah s'appelle {sarahs_dog.name} et mesure {sarahs_dog.height} cm.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"Le plus grand chien est {davids_dog.name}.")
else:
    print(f"Le plus grand chien est {sarahs_dog.name}.")

# ------ Exercise 3
# Classe chanson
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


# ------ Exercise 4

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animaux du zoo :", self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        groups = {}
        for animal in sorted_animals:
            letter = animal[0].upper()
            if letter not in groups:
                groups[letter] = []
            groups[letter].append(animal)

        for key in groups:
            if len(groups[key]) == 1:
                groups[key] = groups[key][0]

        return groups

    def get_groups(self):
        groups = self.sort_animals()
        for key, value in groups.items():
            print(f"{key} : {value}")


# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
