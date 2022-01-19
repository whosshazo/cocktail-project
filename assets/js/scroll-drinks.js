function dynamicLists() {
    var drinkChoices = JSON.parse(localStorage.getItem("drinkChoices"));
    console.log(drinkChoices);
    for (var i = 0; i < drinkChoices.length; i++) {
        $("#drink-holder").append($("<li>").append($("<a>").text(drinkChoices[i].strDrink).attr("href", "./recipe.html")));
    }
}
$("ul").on("click", function (event) {
    var target = $(event.target).children();
    var drinkValue = target.prevObject[0].innerText;
    localStorage.setItem("drinkValue", JSON.stringify(drinkValue));
})
dynamicLists();