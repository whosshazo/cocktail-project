var drinkValue = JSON.parse(localStorage.getItem("drinkValue"));
var drinkRecipes = JSON.parse(localStorage.getItem("drinkRecipes"));
var index = drinkRecipes.findIndex(array => array.strDrink == drinkValue);
console.log(drinkRecipes[index]);
$(".drink-image").attr(".src", drinkRecipes[index].strDrinkThumb);
$(".drink-title").text(drinkValue);
for (var j = 1; j < drinkRecipes.ingArray.length + 1; j++) {
    keyIng = "strIngredient" + j;
    keyMeas = "strMeasure" + j;
    $(".drink-ingriedients").append($("li").text((drinkRecipes[index][key]) + (drinkRecipes[index][keyMeas])))
}
