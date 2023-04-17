// Click and Drag an object

let shape1;
let extraCanvas;
let fr = 6;


function setup() {
  createCanvas(2550, 1080);
  extraCanvas = createGraphics(2550, 1080);
  extraCanvas.clear;
  shape1 = new Draggable(100, 100, 100, 100);
  frameRate(fr);
}


function draw() {
  background(255);
  shape1.over();
  shape1.update();
  shape1.show();
 
  if (mouseIsPressed) {
    extraCanvas.fill(190,0,0,40);
    extraCanvas.ellipse(mouseX, mouseY, 75);
  } else {
    extraCanvas.fill(255,0,0,40);
  }
  extraCanvas.noStroke();
extraCanvas.translate();
  extraCanvas.ellipse(mouseX, mouseY, 50);

   image(extraCanvas,0,0);

}

function mousePressed() {
  shape1.pressed();
}

function mouseReleased() {
  shape1.released();
}