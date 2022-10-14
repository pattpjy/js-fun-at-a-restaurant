function nameMenuItem(name) {
  var menuItemName =  `Delicious ${name}`
   return menuItemName
}
function createMenuItem(name,price,type){
  var menuItem = {
    name: name,
    price: price,
    type:type,
  };
  return menuItem
}


function addIngredients(items,ingredients){
  if (ingredients.indexOf(items) >=0) {
    return;
  } else {
    ingredients.push(items);
  }
}

function formatPrice(initialPrice){
  return `$${initialPrice}`;
}

function decreasePrice(reduce){
  return reduce*(1- 0.1);
}

function createRecipe(title,ingredients, menuItemType){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  };
  return recipe
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


