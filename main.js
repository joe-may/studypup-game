
// $('.tryAgain').hide();

$('.win').hide();
$('.lose').hide();


///// audio

/////////
var generateHearts = function () {
  var heartsLoad = $('<li></li>').html('<img class=heart src="https://i.imgur.com/MQ88P97.png" />');
  $("ul").append(heartsLoad);
  console.log("generating!");
  }



const answerset = [
  { problem: "3 + 2 =", answer: "5"},
  { problem: "6 + 1 =", answer: "7"},
  { problem: "4 + 4 =", answer: "8"},
  { problem: "5 + 4 =", answer: "9"},
  { problem: "3 + 1 =", answer: "4"},
  { problem: "7 + 3 =", answer: "10"},
  { problem: "6 + 3 =", answer: "9"},
  { problem: "2 + 4 =", answer: "6"},
  { problem: "3 + 4 =", answer: "7"},
  { problem: "3 + 5 =", answer: "8"},
  { problem: "2 + 2 =", answer: "4"}

]

$('.start').on('click',function() {
$('.start').hide();
$('.win').hide();
$('.lose').hide();
$('li').first().remove();
$('li').first().remove();
$('li').first().remove();
generateHearts();
generateHearts();
generateHearts();
// $("ul").append('<img src="https://i.imgur.com/MQ88P97.png" />');
// $("li").html('<img src="https://i.imgur.com/MQ88P97.png" />');


$(document).mousemove(function(e) {
  mouseX = e.pageX;
  $('.obi').css("left", e.pageX);
});

var currentGameArray = [];
var playerLives = 0;


answerset.forEach(function(questions) {
  currentGameArray.push(questions)
})


  var randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
  var selectedProblem = currentGameArray[randomProblemSelector].problem;
  var theAnswer = currentGameArray[randomProblemSelector].answer;

console.log(currentGameArray);

  $.each(currentGameArray, function(index,value){
    $(".answers").append("<div class='snowmen' id='0'>" + value.answer + "</div>");
    console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
  });

 

  

  // display the selected problem on the screen
  
  var currentEquation = function () {
    var problemHtml = $('<p></p>').html(selectedProblem);
    return $(".problem").append(problemHtml);
      
  }
 
  currentEquation();
  

  // when answer is clicked on
  $('.answers div').on('click',function() {
    var clickedAnswer = $(this).text();
    
    if (clickedAnswer === theAnswer) {
      console.log("Correct!");
      $(this).fadeOut(1000, function() {
          $('p').first().remove();
          currentGameArray.splice(randomProblemSelector,1);
          winningCheck();
          generateNextTurn();
          console.log(currentGameArray);
       
      });

      // get new problem/answer 

    } else {
      playerLives += 1
      $('li').first().remove();
      console.log("False");
    };
    if (playerLives === 3) {
      $('.lose').show();
      $(".reset").html(" ");
      $(".start").show();
      // generateHearts();
      
      

      
    }
  });


  function generateNextTurn() {
    if (currentGameArray.length === 0){
    return;
    }
    randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
    selectedProblem = currentGameArray[randomProblemSelector].problem;
    theAnswer = currentGameArray[randomProblemSelector].answer;
    //$("p").first().html(selectedProblem);

    var problemHtml = $('<p></p>').html(selectedProblem);
    $(".problem").append(problemHtml);
    
  }
  

  function winningCheck() {
  
  if (currentGameArray.length > 0){
console.log('keep playing');
  } else {
    $('.win').show();
    $(".reset").html(" ");
    $(".start").show();
    $('.tryAgain').show()
    // generateHearts();
    
   
    
  };
}
  
}); 


// var generateHearts = function () {
// var heartsLoad = $('<li></li>').html('<img class=heart src="https://i.imgur.com/MQ88P97.png" />');
// $("ul").append(heartsLoad);
// console.log("generating!");
// }