class GrayBall {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.w = 350;
  }

  update() {
    if(toggle_2==0) {
      toggle_2=1;
    }else if(toggle_2==1){
      toggle_2=0;
    }
  }

  display() {
    if(toggle_2 == 0) {
      for(let i=0;i>200;i++) {
        fill(i);
      }
    }else if(toggle_2==1) {
      for(let i=200;i<0;i--) {
        fill(i);
      }
    }
    noStroke();
    ellipse(this.pos.x, this.pos.y, 350, 350);
  }
}
