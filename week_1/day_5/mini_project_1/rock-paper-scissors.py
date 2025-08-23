from game import Game

def get_user_menu_choice():
    print("\nMenu:")
    print("(g) Play a new game")
    print("(s) Show scores")
    print("(q) Quit")

    choice = input("Enter your choice: ").lower()
    while choice not in ["g", "s", "q"]:
        print("Invalid choice. Please try again.")
        choice = input("Enter your choice: ").lower()
    return choice


def print_results(results):
    print("\nGame Results:")
    print(f"You won {results['win']} times")
    print(f"You lost {results['loss']} times")
    print(f"You drew {results['draw']} times")
    print("Thank you for playing!")


def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()

        if choice == "g":
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == "s":
            print_results(results)
        elif choice == "q":
            print_results(results)
            break

if __name__ == "__main__":
    main()
