$(document).ready(function(){
  let testButton = function() {
    if ($("#q1").val() === "11") {
      alert("you got it right!!");
    } else {
      alert("You're such a dummy!!");
    };

  }
  $("#q1Button").click(testButton);
});
