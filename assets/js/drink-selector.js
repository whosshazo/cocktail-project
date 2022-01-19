var drinkRecipes = JSON.parse(localStorage.getItem("drinkRecipes"));
var checkList = document.getElementById('list1');
var liqourlist = [], extraslist = [];
checkList.getElementsByClassName('anchor')[0].onclick = function (evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}
var checkList2 = document.getElementById('list2');
checkList2.getElementsByClassName('anchor2')[0].onclick = function (evt) {
  if (checkList2.classList.contains('visible'))
    checkList2.classList.remove('visible');
  else
    checkList2.classList.add('visible');
}
function dynamicLists() {
  mixinsParsed = JSON.parse(localStorage.getItem("mixinsParsed"));
  for (var i = 0; i < mixinsParsed.liqour.length; i++) {
    liqourlist.push(mixinsParsed.liqour[i].strIngredient);
  }
  for (var i = 0; i < mixinsParsed.extras.length; i++) {
    extraslist.push(mixinsParsed.extras[i].strIngredient);
  }
  liqourlist = liqourlist.sort();
  extraslist = extraslist.sort();
  for (var i = 0; i < liqourlist.length; i++) {
    $(".ul1").append([
      $("<li>").append([$("<input>", { "type": "checkbox" }).attr("name", "liqours"), $("<span>").text(liqourlist[i])])
    ]);
  }
  for (var i = 0; i < extraslist.length; i++) {
    $(".ul2").append([
      $("<li>").append([$("<input>", { "type": "checkbox" }).attr("name", "extras"), $("<span>").text(extraslist[i])])
    ]);
  }
}
$(document).ready(dynamicLists);

function getChecked() {
  var
    checkedLiq = $('input[name="liqours"]').filter(":checked"),
    checkedExt = $('input[name="extras"]').filter(":checked");
  var liqoursChecked = [], extrasChecked = [];
  if (checkedExt.length > checkedLiq.length) {
    var forNum = checkedExt.length
  }
  else {
    var forNum = checkedLiq.length
  }
  for (var i = 0; i < forNum; i++) {
    if (checkedLiq[i] !== undefined) {
      liqoursChecked.push(checkedLiq[i].nextElementSibling.innerText);
    }
    if (checkedExt[i] !== undefined) {
      extrasChecked.push(checkedExt[i].nextElementSibling.innerText);
    }
  }
  var checkedList = [];
  checkedList = [liqoursChecked, extrasChecked];
  findDrinks(checkedList);
}
function findDrinks(checkedList) {
  var selections = $.merge(checkedList[0], checkedList[1]);
  let avaiable_ing = new Set(selections);
  var drinks = drinkRecipes.filter(r => r.ingArray.every(i => avaiable_ing.has(i)));
  localStorage.setItem("drinkChoices", JSON.stringify(drinks));
}
$(".is-large").on("click", getChecked);

