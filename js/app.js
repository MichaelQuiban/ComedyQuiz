$(document).ready(function(){
var currentQuestion = 0;
var comedyQuestions = [{
    q: "I’m sorry that good-looking people like us made you throw up and feel bad about yourself.",
    choices: ["Shrek.", "Zoolander", "Toy Story", "Boy Meets World"],
    correct: 1
  }, {
    q: "Do you think smoking drugs is cool, Do you think that doing alcohol is cool?",
    choices: ["The Office", "Frozen", "Pokemon", "Digimon"],
    correct: 0
  }, {
    q: "Occasionally, I'll hit somebody with my car. So sue me.",
    choices: ["Big Bang Theory", "Shrek", "The Office", "40 Year Old Virgin"],
    correct: 2
  }, {
    q: "Would I rather be feared or love? Easy. Both, I want people to be afraid of how much they love me.",
    choices: ["Hitch", "The Office", "Rugrats", "Game of Thrones"],
    correct: 1
  }, {
    q: "Oh God, my mind is going a mile an hour.",
    choices: ["Anchorman", "Dr Dre", "Steve Carrell", "The Office"],
    correct: 3
  }, {
    q: "I hate so much about the things that you choose to be.",
    choices: ["Doctor Who", "The Office", "Jackie Chan Adventures", "이나정"],
    correct: 3
  }];
 // If statement checks a certain condition is empty or not. 
  //Content or none.
  if (comedyQuestions.length) {
    updateView();
    //Runs if the array is empty.
  } else {  
    $("#question").html("No questions found.");
    $(".submit").hide();
  }
  $(".submit").click(function (e) {
    e.preventDefault();
    if ($("#answers input:checked").length) {
      if ($("#answers input:checked").val() == comedyQuestions[currentQuestion].correct) {
        alert("Great job!");
        currentQuestion++;
        updateView();
      }
      else
        alert("Nice try, Try again.");
    } else {
      alert("Please submit an answer.");
    }  
  });
  function updateView() {
    if (currentQuestion == comedyQuestions.length) {
      $("#question").html("Please attempt to submit an answer.");
      $(".submit, #answers").hide();
    } else {     
      //Using array notation, take first object in question.
      //The key called q
      //Updates the paragraph with the questions value.
      $("#question").html(comedyQuestions[currentQuestion].q);
      $("#answers").html("");
      $.each(comedyQuestions[currentQuestion].choices, function (idx, choice) {
        $("#answers").append(function () {
          return '<li><label><input name="quizAnswer" type="radio" value="' + idx + '"> ' + choice + ' </label></li>';
        });
      });
    }
  }
});
