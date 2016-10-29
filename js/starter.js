$(document).ready(function(){
  // global variables
  let correctAnswer = $("<p id='correct'>").text('CORRECT!!')

  let testButton = function() {
    if ($("#q1").val() === "11") {
      $("#q1Button").append(correctAnswer);
      $("#question2").removeClass('hidden');
      $("#question2").addClass('animated').addClass('zoomIn');
    } else {
      let wrongAnswer = $("<p>").text('no, dummy');
      $("#q1Button").append(wrongAnswer);
    };

  }
  $("#q1Button").click(testButton);
});
