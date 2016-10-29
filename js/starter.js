$(document).ready(function(){
  // global variables

  let randNumb = Math.floor(Math.random() * 100);
  let randNumb1 = Math.floor(Math.random() * 100);
  let randNumb2 = Math.floor(Math.random() * 100);
  let randNumb3 = Math.floor(Math.random() * 100);
  let randNumb4 = Math.floor(Math.random() * 100);
  let randNumb5 = Math.floor(Math.random() * 100);
  let randNumb6 = Math.floor(Math.random() * 100);
  let randNumb7 = Math.floor(Math.random() * 100);
  let randNumb8 = Math.floor(Math.random() * 100);
  let randNumb9 = Math.floor(Math.random() * 100);
  let randNumb10 = Math.floor(Math.random() * 100);
  let randNumb11 = Math.floor(Math.random() * 100);
  let randNumb12 = Math.floor(Math.random() * 100);
  let randNumb13 = Math.floor(Math.random() * 100);
  let randNumb14 = Math.floor(Math.random() * 100);
  let randNumb15 = Math.floor(Math.random() * 100);
  let randNumb16 = Math.floor(Math.random() * 100);
  let randNumb17 = Math.floor(Math.random() * 100);
  let randNumb18 = Math.floor(Math.random() * 100);
  let randNumb19 = Math.floor(Math.random() * 100);
  let randNumb20 = Math.floor(Math.random() * 100);
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

  $("#q4FirstValue").text(randNumb3);
  $("#q4SecondValue").text(randNumb4);
  $("#q5FirstValue").text(randNumb5);
  $("#q5SecondValue").text(randNumb6);
  $("#q6FirstValue").text(randNumb7);
  $("#q6SecondValue").text(randNumb8);
  $("#q7FirstValue").text(randNumb9);
  $("#q7SecondValue").text(randNumb10);
  $("#q8FirstValue").text(randNumb11);
  $("#q8SecondValue").text(randNumb12);
  $("#q9FirstValue").text(randNumb13);
  $("#q9SecondValue").text(randNumb14);
  $("#q10FirstValue").text(randNumb15);
  $("#q10SecondValue").text(randNumb16);


  $("#q1Button").click(q1Button);
  $("#q2Button").click(q2Button);
  $("#q3Button").click(q3Button);
});
