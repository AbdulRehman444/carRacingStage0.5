var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;


//these are 3 objects 
var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
}
