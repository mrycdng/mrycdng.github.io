let feet = [];
let ratio = 5/3;

function preload (){
  feet[0] = loadImage('feet_1.png');
  feet[1] = loadImage('feet_2.png');
  feet[2] = loadImage('feet_3.png');
  feet[3] = loadImage('feet_4.png');
  feet[4] = loadImage('feet_5.png');
  feet[5] = loadImage('feet_6.png');
  feet[6] = loadImage('feet_7.png');
  feet[7] = loadImage('feet_8.png');
  feet[8] = loadImage('feet_9.png');
  feet[9] = loadImage('feet_10.png');
  feet[10] = loadImage('feet_11.png');
}

function setup() {
  createCanvas(windowWidth, windowWidth/ratio);
}

function draw() {
  imageMode(CENTER);
  
  let ww = width;
  let wh = height;
  
  if (mouseX >= 0 && mouseX < ww*1/11){
    image(feet[0], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >= ww*1/11 && mouseX < ww*2/11){
    image(feet[1], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*2/11 && mouseX < ww*3/11){
    image(feet[2], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*3/11 && mouseX < ww*4/11){
    image(feet[3], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*4/11 && mouseX < ww*5/11){
    image(feet[4], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*5/11 && mouseX < ww*6/11){
    image(feet[5], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*6/11 && mouseX < ww*7/11){
    image(feet[6], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*7/11 && mouseX < ww*8/11){
    image(feet[7], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*8/11 && mouseX < ww*9/11){
    image(feet[8], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*9/11 && mouseX < ww*10/11){
    image(feet[9], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*10/11) {
    image(feet[10], ww/2, wh/2, wh*ratio, wh);
  }
}