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
  background(100);
}

function draw() {
  if(toggle==0) {
    fill(4, 11, 60, 60);
  }else if(toggle==1) {
    fill(255);
  }
  noStroke();
  rect(0,0,width,height);
  blendMode(BLEND);

  for(let i = 1; i < 50; i++) {
    let ball_d = dist(ball[i].pos.x, ball[i].pos.y, ball[i-1].pos.x, ball[i-1].pos.y)
    print(ball_d);
  }

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
