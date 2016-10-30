$(document).ready(function(){
  // global variables
  let score = 0;
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
      $("#q1Button").attr("disabled","disabled");
    };
  };

  let q2Button = function() {
    if ($("#q2").val() === "24") {
      $("#q2Button").append(correctAnswer);
    }
  };

  let q3Button = function() {
    let answer = parseInt($("#q3Answer").val());
    if (answer === randNumb1 + randNumb2) {
      $("#q3Button").append(correctAnswer);
    }
  };

  let evalTest = function() {
    let answer3 = parseInt($("#q3Answer").val());
    let answer4 = parseInt($("#q4Answer").val());
    let answer5 = parseInt($("#q5Answer").val());
    let answer6 = parseInt($("#q6Answer").val());
    let answer7 = parseInt($("#q7Answer").val());
    let answer8 = parseInt($("#q8Answer").val());
    let answer9 = parseInt($("#q9Answer").val());
    let answer10 = parseInt($("#q10Answer").val());

    if ($("#q1").val() === "11") {
      score++;
    };

    if ($("#q2").val() === "24") {
      score++;
    }

    if (answer3 === randNumb1 + randNumb2) {
      score++;
      console.log(score);
    };
    if (answer4 === randNumb3 + randNumb4) {
      score++;
      console.log(score);
    };
    if (answer5 === randNumb5 + randNumb6) {
      score++;
      console.log(score);
    };
    if (answer6 === randNumb7 + randNumb8) {
      score++;
      console.log(score);
    };
    if (answer7 === randNumb9 + randNumb10) {
      score++;
      console.log(score);
    };
    if (answer8 === randNumb11 + randNumb12) {
      score++;
      console.log(score);
    };
    if (answer9 === randNumb13 + randNumb14) {
      score++;
      console.log(score);
    };
    if (answer10 === randNumb15 + randNumb16) {
      score++;
      console.log(score);
    };
    let result = $("<p id=result>").text("you scored " + score + " out of 10!!");
    $("body").append(result);
    $("#submitBTNAddition").attr("disabled","disabled");
  }

// code
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

  // $("#q1Button").click(q1Button);
  // $("#q2Button").click(q2Button);
  // $("#q3Button").click(q3Button);

  $("#submitBTNAddition").click(evalTest);


















});
