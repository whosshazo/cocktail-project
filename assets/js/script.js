function grabMixins() {
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
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (var i = 0; i < alphabet.length; i++) {
        var drinkApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + alphabet[i];
        fetch(drinkApiUrl).then(function (response) {
            response.json().then(function (data) {

            }
            );
        });
    }
}
console.log(mixins);