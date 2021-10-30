class Ball {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.acc = createVector(0,0.1);
    this.colors = 5;
    this.colors_2 = [ '#69D2E7', '#27DBD8', '#50E46C', '#3386FF', '#FA69FA', '#FF4E50', '#F9D423' ];

    this.size_1 = 1;
    this.size_2 = 150;
    this.sizeScalar = 0.95;

    this.w = 11;

    this.pos_2 = createVector(0, 0);
    this.vel_2 = createVector(0, 0);
  }

   chkEdge() {
    if(this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }
    if(this.pos.y < 0) {
      this.vel.y *= -1;
      this.pos.y = 0;
    }
    if(this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
    if(this.pos.x < 0) {
      this.vel.x *= -1;
      this.pos.x = 0;
    }
  }

  chk() {
    let d = dist(this.pos.x, gray_ball.pos.x, this.pos.y, gray_ball.pos.y);
    if( d >= 175 ) {

      fill(random(this.colors_2));
      // fill(random(200,255));
      // this.vel_2.x += sin(random(1,2)) * 0.1;
      // this.vel_2.y += cos(1.2) * 0.1;
      //
      // this.pos_2.add(this.vel_2);

      this.pos_2.x = this.pos.x;
      this.pos_2.y = this.pos.y;
      for(let i=0;i<20;i+=2) {
        this.pos_2.mult(i);
        rect(this.pos_2.x, this.pos_2.y, 15, 15);
      }

      for(let i=0;i<255;i++) {
        this.colors = random(i);
      }
      this.vel.mult(-1);
      // soundFile.setVolume(0.5);
      // soundFile.play();
    }else{
      this.acc.mult(-1);
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }

  display() {
    fill(this.colors);
	  noStroke();
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
  }
}
