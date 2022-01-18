
var checkList = document.getElementById('list1');
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
  console.log(mixinsParsed);
  for (var i = 0; i < mixinsParsed.liqour.length; i++) {
    $(".ul1").append([
      $("<li>").append([$("<input>", { "type": "checkbox" }), $("<span>").text(mixinsParsed.liqour[i].strIngredient)])
    ]);
  }
  //<li><input type="checkbox" />Extra Ex 1</li>
  for (var i = 0; i < mixinsParsed.extras.length; i++) {
    $(".ul2").append([
      $("<li>").append([$("<input>", { "type": "checkbox" }), $("<span>").text(mixinsParsed.extras[i].strIngredient)])
    ]);
  }
}
$(document).ready(dynamicLists);
