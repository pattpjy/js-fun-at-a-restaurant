
function createRestaurant(name,menu){
  var resName = {
    name: name,
    menus: menu = {
      breakfast: [],
      lunch: [],
      dinner: []
    },
  }
  return resName
}
function addMenuItem(resNam,newMenu){
  var menuType = newMenu.type
  
  if(resNam.menus[menuType].indexOf(newMenu) < 0 ){
    return resNam.menus[menuType].push(newMenu)
  } else {
    return
  }
}
var pizzaRestaurant = createRestaurant("Sexy Pizza");
      var bbqPizza = {
        name: "BBQ Chicken Pizza",
        price: "12.49",
        type: "lunch"
      };

      var veggiePizza = {
        name: "Veggie Pizza",
        price: "11.49",
        type: "dinner"
      };

      var baconEggsPizza = {
        name: "Bacon and Eggs Pizza",
        price: "13.49",
        type: "breakfast"
      };

      addMenuItem(pizzaRestaurant, bbqPizza);
      addMenuItem(pizzaRestaurant, baconEggsPizza);
      addMenuItem(pizzaRestaurant, veggiePizza);





function removeMenuItem(resNam,items,nMtype){
    var type = nMtype
    if ( items === resNam.menus[type][0].name ){
      resNam.menus[type].splice(0,1);
      return `No one is eating our ${items} - it has been removed from the ${nMtype} menu!`
    } else {
      return 'not match'
    }
  }
  
console.log('try', pizzaRestaurant.menus.breakfast[0].name);

module.exports = {
createRestaurant, 
addMenuItem,
removeMenuItem
}