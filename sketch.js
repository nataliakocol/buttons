//var dogButton = new Button('Dog', 10, 10);
//var catButton = new Button('Cat', 120, 10);
//var turtleButton
var buttons = [];
buttons[0] = new Button('Dog', 10, 10, 'woof');
buttons[1] = new Button('Cat', 120, 10, 'meow');

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (var i in buttons) {
    buttons[i].draw();
  }
}

function mousePressed() {
  for (var i in buttons) {
    if (buttons[i].containsMouse()) {
      alert(buttons[i].sound);
    }
  }
}
