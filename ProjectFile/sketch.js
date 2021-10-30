let ball = [];
let gray_ball;
let toggle = 0;
let toggle_2 = 0;

function setup() {
  createCanvas(600, 600);
  for(let i = 0; i < 50; i++) {
    ball[i] = new Ball();
  }
  gray_ball = new GrayBall();
  background(100,60);
}

// function preload(){
//   soundFormats('ogg', 'mp3');
//   soundFile = loadSound('../soundFile/Ball_sound.mp3');
// }

function draw() {
  if(toggle==0) {
    fill(4, 11, 60, 60);
  }else if(toggle==1) {
    for(let i=0; i<60; i++) {
      fill(255, i);
    }
  }
  // noStroke();
  rect(0,0,width,height);
  blendMode(BLEND);

  gray_ball.display();

  fill(50);
  ellipse(width/2, height/2, 30, 30);

  for(let i = 0; i < 50; i++) {
    ball[i].chk();
    ball[i].chkEdge();
    ball[i].update();
    ball[i].display();
  }
}

function mouseClicked() {
  gray_ball.update();
  if(toggle == 0) {
    toggle = 1;
  }else if(toggle == 1) {
    toggle = 0;
  }
}
