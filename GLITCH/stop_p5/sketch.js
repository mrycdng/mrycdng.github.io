let stops = [];
let ratio = 5/3;

function preload (){
  stops[0] = loadImage('stop_1.png');
  stops[1] = loadImage('stop_2.png');
  stops[2] = loadImage('stop_3.png');
  stops[3] = loadImage('stop_4.png');
  stops[4] = loadImage('stop_5.png');
  stops[5] = loadImage('stop_6.png');
  stops[6] = loadImage('stop_7.png');
  stops[7] = loadImage('stop_8.png');
  stops[8] = loadImage('stop_9.png');
  stops[9] = loadImage('stop_10.png');
  stops[10] = loadImage('stop_11.png');
}

function setup() {
  createCanvas(windowWidth, windowWidth/ratio);
}

function draw() {
  imageMode(CENTER);
  
  let ww = width;
  let wh = height;
  
  if (mouseX >= 0 && mouseX < ww*1/11){
    image(stops[0], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >= ww*1/11 && mouseX < ww*2/11){
    image(stops[1], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*2/11 && mouseX < ww*3/11){
    image(stops[2], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*3/11 && mouseX < ww*4/11){
    image(stops[3], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*4/11 && mouseX < ww*5/11){
    image(stops[4], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*5/11 && mouseX < ww*6/11){
    image(stops[5], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*6/11 && mouseX < ww*7/11){
    image(stops[6], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*7/11 && mouseX < ww*8/11){
    image(stops[7], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*8/11 && mouseX < ww*9/11){
    image(stops[8], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*9/11 && mouseX < ww*10/11){
    image(stops[9], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*10/11) {
    image(stops[10], ww/2, wh/2, wh*ratio, wh);
  }
}