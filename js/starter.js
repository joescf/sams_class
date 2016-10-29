$(document).ready(function(){
  // global variables

  let randNumb1 = Math.floor(Math.random() * 100);
  let randNumb2 = Math.floor(Math.random() * 100);
  let correctAnswer = $("<p id='correct'>").text('CORRECT!!');

  // functions

  let q1Button = function() {
    if ($("#q1").val() === "11") {
      $("#q1Button").append(correctAnswer);
      $("#question2").removeClass('hidden');
      // $("#question2").addClass('animated').addClass('zoomIn');
      $("#q1Button").attr("disabled","disabled")
    } else {
      let wrongAnswer = $("<p>").text('incorrect');
      $("#q1Button").append(wrongAnswer);
      $("#q1Button").attr("disabled","disabled")
    };
  };

  let q2Button = function() {
    if ($("#q2").val() === "24") {
      $("#q2Button").append(correctAnswer);
    }
  }

  let q3Button = function() {
    let answer = parseInt($("#q3Answer").val());
    if (answer === randNumb1 + randNumb2) {
      $("#q3Button").append(correctAnswer);
    }
  }

// code

    console.log(randNumb1 + randNumb2)
  $("#q3FirstValue").text(randNumb1);
  $("#q3SecondValue").text(randNumb2);
  $("#q1Button").click(q1Button);
  $("#q2Button").click(q2Button);
  $("#q3Button").click(q3Button);
});
