
var add = function(number1, number2, number3) {
  return number1 + number2 + number3;
};

$(document).ready(function() {
  $("form#meter").submit(function(event) {
  var abortion = parseInt($("select#abortion").val());
  var marriage = parseInt($("select#marriage").val());
  var parenthood = parseInt($("select#parenthood").val());
  var result = add(abortion, marriage, parenthood);
  console.log(result)
  if (result === 3) {
    alert("you are a democratic!");
  } else if (result === 9) {
    alert("you are a republican!");
  } else if (result > 9) {
    alert("Error");
  } else {
    alert("you're in the middle!");
  }
 event.preventDefault();
 });
});
