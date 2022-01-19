var drinkShow = JSON.parse(localStorage.getItem("drinkShow"));
var drinkRecipes = JSON.parse(localStorage.getItem("drinkRecipes"));
var index = drinkRecipes.findIndex(array => array.strDrink == drinkShow);
console.log(index);