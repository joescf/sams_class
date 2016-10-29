$(document).ready(function(){
  // global variables

  let correctAnswer = $("<p id='correct'>").text('CORRECT!!')

  // functions

  let q1Button = function() {
    if ($("#q1").val() === "11") {
      $("#q1Button").append(correctAnswer);
      $("#question2").removeClass('hidden');
      $("#question2").addClass('animated').addClass('zoomIn');
      $("#q1Button").attr("disabled","disabled")
    } else {
      let wrongAnswer = $("<p>").text('incorrect');
      $("#q1Button").append(wrongAnswer);
      $("#q1Button").attr("disabled","disabled")
    };
  };

  let q2Button = function() {
    if ($("#q2").val() === "4") {
      $("#q2Button").append(correctAnswer);
    }
  }


  $("#q1Button").click(q1Button);
  $("#q2Button").click(q2Button);
});
