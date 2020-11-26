var bike1img,bike2img;
var bgimg;
var distance = 0;
var allPlayers;
var gameState = 0;
var playerCount;
var bike1,bike2;

var database;

var form, player, game;

function preload(){
    bike1img = loadImage("images/sprite_0.png");
    bikeimg2 = loadImage("images/sprite_0.png");
    bgimg = loadImage("images/0.png");

}function setup(){
    canvas = createCanvas(displayWidth -20,displayHeight -30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  }
  
  
  function draw(){
    if(playerCount === 2){
      game.update(1)
    }
    if(gameState === 1){
      clear();
      game.play();
    }
  }