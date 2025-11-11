let eyes = [];
let ratio = 5/3;

function preload (){
  eyes[0] = loadImage('eyes_1.png');
  eyes[1] = loadImage('eyes_2.png');
  eyes[2] = loadImage('eyes_3.png');
  eyes[3] = loadImage('eyes_4.png');
  eyes[4] = loadImage('eyes_5.png');
  eyes[5] = loadImage('eyes_6.png');
  eyes[6] = loadImage('eyes_7.png');
  eyes[7] = loadImage('eyes_8.png');
  eyes[8] = loadImage('eyes_9.png');
  eyes[9] = loadImage('eyes_10.png');
  eyes[10] = loadImage('eyes_11.png');
}

function setup() {
  createCanvas(windowWidth, windowWidth/ratio);
}

function draw() {
  imageMode(CENTER);
  
  let ww = width;
  let wh = height;
  
  if (mouseX >= 0 && mouseX < ww*1/11){
    image(eyes[0], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >= ww*1/11 && mouseX < ww*2/11){
    image(eyes[1], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*2/11 && mouseX < ww*3/11){
    image(eyes[2], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*3/11 && mouseX < ww*4/11){
    image(eyes[3], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*4/11 && mouseX < ww*5/11){
    image(eyes[4], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*5/11 && mouseX < ww*6/11){
    image(eyes[5], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*6/11 && mouseX < ww*7/11){
    image(eyes[6], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*7/11 && mouseX < ww*8/11){
    image(eyes[7], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*8/11 && mouseX < ww*9/11){
    image(eyes[8], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*9/11 && mouseX < ww*10/11){
    image(eyes[9], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*10/11) {
    image(eyes[10], ww/2, wh/2, wh*ratio, wh);
  }
}