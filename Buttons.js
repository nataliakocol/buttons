class Button {
  constructor(label, x, y) {
    //console.log('making a new button ', label)
    this.label = label;
    this.x = x;
    this.y = y;
    console.log(this);
  }

  draw() {
    rect(this.x, this.y, 100, 30);
    text(this.label, this.x+50, this.y+20);
    textAlign(CENTER);
  }
  //console.log(x);
}
