var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var allPlayers;
var gameState;
var car_1Img
var car_2Img
var trackImg

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car_1Img=loadImage('/assets/car1.png')
  car2Img=loadImage('/assets/car2.png')
  trackImg=loadImage('/assets/track.jpg')

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  

}

function draw() {
  background(backgroundImage);
  if(playerCount==2){
    game.update(1)
  }
  if(gameState==1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
