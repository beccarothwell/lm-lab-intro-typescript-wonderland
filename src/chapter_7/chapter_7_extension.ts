import { endAdventure, haveAdventures } from "../..";
import { DrinkType, DRINKS } from "../chapter_3/chapter_3_tea_party";
import { askQuestion, clear, print } from "../ui/console";
import { parseDrinkInput } from "../ui/parse_input";

export function breakfastTime(): void {
  clear(true);
  print("You decide to eat some of the tarts for breakfast.");
  print("There are a number of drinks to choose from:");

  listDrinks();
}

function listDrinks(): void {
  DRINKS.forEach((drink, i) => print(`   ${i} - ${drink}`));
  askQuestion("Which number drink will you choose?", chooseDrink);
}

function chooseDrink(input: string) {
  const drink = parseDrinkInput(input);

  if (drink === undefined) {
    print(`😮`);
    print(`${input} is an invalid input 😭`);
    return endAdventure();
  }

  return haveDrink(drink);
}

function haveDrink(drink: DrinkType): void {
  clear(true);

  switch (drink) {
    case "Coffee":
      print(
        "A strong choice, but wouldn't a nice cup of tea go better with these tarts?"
      );
      return listDrinks();
    case "Lemonade":
      print("That's not really a breakfast drink, maybe try something else?");
      return listDrinks();
    case "Water":
      print(
        "A great way to stay hydrated! But what about something to help wake you up?"
      );
      return listDrinks();
    case "Tea":
      print(
        "Ahh, the perfect cup of tea, freshly poured from a teapot, into a lovely china cup."
      );
      print("This all feels oddly familiar though...");
      return askQuestion("Press ENTER to continue!", haveAdventures);
  }
}
