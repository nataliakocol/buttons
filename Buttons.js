class Button {
  constructor(label, x, y, sound) {
    //console.log('making a new button ', label)
    this.label = label;
    this.x = x;
    this.y = y;
    this.sound = sound;
    console.log(this);
  };

  draw() {
    if (this.containsMouse()) {
      fill('lightskyblue');
    }
    else {
      fill(255);
    }
    rect(this.x, this.y, 100, 30);

    fill(0);
    textAlign(CENTER);
    text(this.label, this.x+50, this.y+20);
  };

  containsPoint(x, y) {
    if (x > this.x && x < this.x+100 && y > this.y && y < this.y+30) {
      return true;
    }
    else {
      return false;
    }
    /*
    or
    var left, right, bottom, top...
    var isinhorizontalrange = left<x && x<right;
    var is...
    return isinhor...&isinvert.. ;
     */
  };

  containsMouse() {
    return this.containsPoint(mouseX, mouseY);
  }
}
