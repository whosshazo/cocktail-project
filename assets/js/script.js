var mixins = JSON.parse(localStorage.getItem("mixins"));
var drinkRecipes = JSON.parse(localStorage.getItem("drinkRecipes"));
if (mixins == null) {
    mixins = [];
    grabMixins();
}
if (drinkRecipes == null) {
    drinkRecipes = [];
    grabDrinks();
}
function grabMixins() {
    console.log("Mixins Api");
    for (var i = 1; i < 580; i++) {
        var mixinApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=" + i;
        fetch(mixinApiUrl).then(function (response) {
            response.json().then(function (data) {
                if (data.ingredients !== null) {
                    mixins.push(data.ingredients[0]);
                    localStorage.setItem("mixins", JSON.stringify(mixins));
                }
            }
            );
        });
    }
}
function grabDrinks() {
    console.log("Drinks Api");
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (var i = 0; i < alphabet.length; i++) {
        var drinkApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + alphabet[i];
        fetch(drinkApiUrl).then(function (response) {
            response.json().then(function (data) {
                if (data.drinks !== null) {
                    for (var i = 0; i < data.drinks.length; i++) {
                        drinkRecipes.push(data.drinks[i]);
                    }
                }
            }
            );
        });
    }
    parseIng();
}
function parseIng() {
    for (var i = 0; i < drinkRecipes.length; i++) {
        var obj = drinkRecipes[i];
        var values = [];
        for (var j = 1; j < 16; j++) {
            key = "strIngredient" + j;
            if (obj[key] !== null) {
                values.push(obj[key]);
            }
        }
        drinkRecipes[i].ingArray = values;
    }
    localStorage.setItem("drinkRecipes", JSON.stringify(drinkRecipes));
}
function findMixinIndex(mixin) {
    var ref = [],
        indexMixin = [];
    for (var i = 0; i < drinkRecipes.length; i++) {
        indexMixin[i] = drinkRecipes[i].ingArray.some(ing => ing == mixin);
    }
    for (var i = 0; i < indexMixin.length; i++) {
        if (indexMixin[i]) {
            ref.push(i);
        }
    }
    return ref;
}
ref = findMixinIndex("Egg");

function findDrinks() {
    var selections;
    if ($('.checkbox').is(':checked')) {
        selections.push($(this).text());
    }
    let avaiable_ing = new Set(selections);


    var drinks = drinkRecipes.filter(r => r.ingArray.every(i => avaiable_ing.has(i)));
    return drinks;
}
drinks = findDrinks();
