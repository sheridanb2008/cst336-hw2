// variables 
var bank = 500;
var bet = 0;
var lastBet = 100;
var selectedPosition = "";
var position = [{code: "123", card1: "ace.png", card2: "diamond.png", card3: "spade.png"},
                {code: "132", card1: "ace.png", card2: "spade.png", card3: "diamond.png"},
                {code: "213", card1: "diamond.png", card2: "ace.png", card3: "spade.png"},
                {code: "312", card1: "spade.png", card2: "ace.png", card3: "diamond.png"},
                {code: "231", card1: "diamond.png", card2: "spade.png", card3: "ace.png"},
                {code: "321", card1: "spade.png", card2: "diamond.png", card3: "ace.png"}];
    

// Listerers
window.onload = startGame();

function startGame(){
  cleanBoard();
  pickPosition();
  setupBoard();
  showVault();
}

function cleanBoard(){
for(var i = 0; i < selectedPosition.length; i++){
  $("#slot" + (i + 1)).empty();
}
  $('.card').empty();
  $("#board").hide();
  $("results").empty();
  $("#bet").show();
  $("#bet").empty();
  $("#betting").empty();
  $("#results").empty();
  $("#replay").empty();
}
// Functions 
// Ramdom pick card positions
function pickPosition(){
  var randomInt = Math.floor(Math.random() * 6);
  selectedPosition = position[randomInt].code;  
}
// Setup board for game play
function setupBoard(){
  for(var i = 0; i < selectedPosition.length; i++){
    $("#slot" + (i + 1)).append("<img class='card' id='" + selectedPosition[i] +"' src='img/back.png'>");
  }
  $("#bet").append("<input type='number' id='betAmount' min='1.00' step='0.01' value='" + lastBet + "'/>");
  $("#bet").append("<button id='betAmount' onclick='getBet()'>Place Bet</button>");
} 
// Show total money in vault
function showVault(){
  $("#vault").empty();
  $("#vault").append("<h3> You Have $" + (bank.toFixed(2)) + " Dollars</h3>");
}
// Get users bet
function getBet(){
  bet = Number(document.getElementById("betAmount").value).toFixed(2);
  lastBet = bet;
  $("#betting").empty();
  if(bet > bank || bet < 0){
    $("#betting").append("<h4>That is an Invalid Bet")
  }else{
    $("#bet").hide();
    $("#board").show();
    $("#betting").append("<h4>Your bet is $" + bet + "</h4>");
  }  
}
// Listener for a click on a card
$(document).on('click','.card',function(){
  checkCard(this.id);
})
// Check to see if the correct card was picked  
function checkCard(id){
  if(id == "1"){
    $("#results").append("<h1>You Won This Round!!!  Your Winnings have been add to your total.</h1>")
    bank += +bet;    
  } else {
    $("#results").append("<h1>You Lost This Round!!!</h1>")
    bank -= +bet;    
  }
  showVault();
  unveilCard(id);    
  $(".card").prop("disabled", true);
}
// Show card that was picked  
function unveilCard(id){
  for(var i = 0; i < selectedPosition.length; i++){
    if(selectedPosition[i] == id){
      $("#slot" + (i + 1)).empty();
      $("#slot" + (i + 1)).append("<img class='card' id='" + selectedPosition[i] +"' src='img/card" + id +".png'>");
    }
  }
  continuePlaying();
}
// replay or resart game and check bank if empty
function continuePlaying(){
  if(bank != 0){  
    $("#replay").append("<button id='again' onclick='startGame()'>Continue</button>");  
    $("#replay").append("<button id='startOver' onclick='location.reload()'>Start Over</button>"); 
  }else{
    $("#results").append("<h1>You Are Broke.  Come back when you find some more money.</h1>")
    $("#replay").append("<button id='startOver' onclick='location.reload()'>Start Over</button>"); 
}}