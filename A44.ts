// the 3 dots is a keyword for getting multiple inputs in corresponding to one variable.

function orderSandwich(type : string,...items: string[]): void {
// .join will be used to combine and print all the parameters passed in a variable 
    console.log(`You ordered a ${type} sandwich with ${items.join(", ")}.`);
  }
orderSandwich("classic", "Bread", "Turkey", "Lettuce", "Tomato", "Mayonnaise");

orderSandwich("Veggie","Bread", "Avocado", "Cucumber", "Spinach");

orderSandwich("Chhesy","Bread", "Cheddar Cheese", "Butter");