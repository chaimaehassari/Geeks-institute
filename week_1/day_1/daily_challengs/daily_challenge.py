# ------ Challenge 1
# numbre =int(input("entre un numbre: "))
# lenght = int(input("entre la longeur: "))
# liste = [numbre*i for i in range(1,lenght+1)]
# print(liste)

# ------ Challenge 2

chaine = input("Entre une chaine de caractere: ")
nouvelle_chaine = ""
for i in range(len(chaine)):
    
    if i == 0 or chaine[i] != chaine[i-1]:
        nouvelle_chaine += chaine[i]
print("Résultat:", nouvelle_chaine)
