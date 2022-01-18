
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
      $("<li>").append([$("<input>", { "type": "checkbox" }).attr("name", "liqours"), $("<span>").text(mixinsParsed.liqour[i].strIngredient)])
    ]);
  }
  for (var i = 0; i < mixinsParsed.extras.length; i++) {
    $(".ul2").append([
      $("<li>").append([$("<input>", { "type": "checkbox" }).attr("name", "extras"), $("<span>").text(mixinsParsed.extras[i].strIngredient)])
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

    console.log(forNum);
    for (var i = 0; i < forNum; i++) {
      if (checkedLiq[i] !== undefined) {
        liqoursChecked.push(checkedLiq[i].nextElementSibling.innerText);
      }
      if (checkedExt[i] !== undefined) {
        extrasChecked.push(checkedExt[i].nextElementSibling.innerText);
      }
    }
    checkedList = [liqoursChecked, extrasChecked];
    localStorage.setItem("checkedList", JSON.stringify(checkedList));
  }
}
$(".is-large").on("click", getChecked);