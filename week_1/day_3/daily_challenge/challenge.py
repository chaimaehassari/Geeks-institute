class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}  

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        info = f"{self.name}'s farm\n"
        for animal, count in self.animals.items():
            info += f"{animal} : {count}\n"
        info += "    E-I-E-I-0!"
        return info

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animals = self.get_animal_types()
        animal_strs = []
        for a in animals:
            if self.animals[a] > 1:
                animal_strs.append(a + 's')
            else:
                animal_strs.append(a)
        return f"{self.name}'s farm has " + ", ".join(animal_strs[:-1]) + " and " + animal_strs[-1] + "."


# TEST DU PROGRAMME
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())
print(macdonald.get_short_info())
