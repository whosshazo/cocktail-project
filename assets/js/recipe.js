var drinkValue = JSON.parse(localStorage.getItem("drinkValue"));
var drinkRecipes = JSON.parse(localStorage.getItem("drinkRecipes"));
var index = drinkRecipes.findIndex(array => array.strDrink == drinkValue);
$(".drink-image").attr("src", drinkRecipes[index].strDrinkThumb);
$(".drink-title").text(drinkValue);
for (var j = 1; j < drinkRecipes[j].ingArray.length; j++) {
    var keyIng = "strIngredient" + j;
    var keyMeas = "strMeasure" + j;
    $(".drink-measurements").append($("<li>").text((drinkRecipes[index][keyIng]) + " : " + (drinkRecipes[index][keyMeas])))
}
var steps = drinkRecipes[index].strInstructions.split(".");
console.log(steps);
for (var i = 0; i < steps.length - 1; i++) {
    $(".mixing-instructions").append($("<li>").text(steps[i]));
}