function dynamicLists() {
    var drinkChoices = JSON.parse(localStorage.getItem("drinkChoices"));
    console.log(drinkChoices);
    for (var i = 0; i < drinkChoices.length; i++) {
        $("#drink-holder").append($("<li>").append($("<button>").text(drinkChoices[i].strDrink)));
    }
}
$(document).ready(dynamicLists);
