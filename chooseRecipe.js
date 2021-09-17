//https://gist.github.com/meghalshah210/82aa45d92b72482b061ec95c9caa9f4a
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let ingredients = [];
  for(let i = 0;i < recipes.length;i++){
    ingredients = recipes[i].ingredients;
    for(let j = 0;j < ingredients.length; j++){
      if(bakeryA.includes(ingredients[j])){
        for(let k = 0;k < ingredients.length; k++){
          if(bakeryB.includes(ingredients[k])){
            return recipes[i].name;
          }
        }
      }
    }
  }
  
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));