var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

function nextSequence() {
  var a = Math.random();
  a = a * 3;
  a = Math.floor(a) + 1;
  return a;
}

var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

$(".btn").click(function (event) {
  //there was no button element it was inside the div so used btn class which was present in the html.
  //   $(this).fadeOut(100).fadeIn(100); // this because want to animate the button which i clicked not every buttons.
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
