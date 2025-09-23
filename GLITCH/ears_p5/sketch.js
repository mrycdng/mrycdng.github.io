let ears = [];
let ratio = 5/3;

function preload (){
  ears[0] = loadImage('ears_1.png');
  ears[1] = loadImage('ears_2.png');
  ears[2] = loadImage('ears_3.png');
  ears[3] = loadImage('ears_4.png');
  ears[4] = loadImage('ears_5.png');
  ears[5] = loadImage('ears_6.png');
  ears[6] = loadImage('ears_7.png');
  ears[7] = loadImage('ears_8.png');
  ears[8] = loadImage('ears_9.png');
  ears[9] = loadImage('ears_10.png');
  ears[10] = loadImage('ears_11.png');
}

function setup() {
  createCanvas(windowWidth, windowWidth/ratio);
}

function draw() {
  imageMode(CENTER);
  
  let ww = width;
  let wh = height;
  
  if (mouseX >= 0 && mouseX < ww*1/11){
    image(ears[0], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >= ww*1/11 && mouseX < ww*2/11){
    image(ears[1], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*2/11 && mouseX < ww*3/11){
    image(ears[2], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*3/11 && mouseX < ww*4/11){
    image(ears[3], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*4/11 && mouseX < ww*5/11){
    image(ears[4], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*5/11 && mouseX < ww*6/11){
    image(ears[5], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*6/11 && mouseX < ww*7/11){
    image(ears[6], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*7/11 && mouseX < ww*8/11){
    image(ears[7], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*8/11 && mouseX < ww*9/11){
    image(ears[8], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*9/11 && mouseX < ww*10/11){
    image(ears[9], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*10/11) {
    image(ears[10], ww/2, wh/2, wh*ratio, wh);
  }
}