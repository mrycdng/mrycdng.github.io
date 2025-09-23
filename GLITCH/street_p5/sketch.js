let street = [];
let ratio = 5/3;

function preload (){
  street[0] = loadImage('street_1.png');
  street[1] = loadImage('street_2.png');
  street[2] = loadImage('street_3.png');
  street[3] = loadImage('street_4.png');
  street[4] = loadImage('street_5.png');
  street[5] = loadImage('street_6.png');
  street[6] = loadImage('street_7.png');
  street[7] = loadImage('street_8.png');
  street[8] = loadImage('street_9.png');
  street[9] = loadImage('street_10.png');
  street[10] = loadImage('street_11.png');
}

function setup() {
  createCanvas(windowWidth, windowWidth/ratio);
}

function draw() {
  imageMode(CENTER);
  
  let ww = width;
  let wh = height;
  
  if (mouseX >= 0 && mouseX < ww*1/11){
    image(street[0], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >= ww*1/11 && mouseX < ww*2/11){
    image(street[1], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*2/11 && mouseX < ww*3/11){
    image(street[2], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*3/11 && mouseX < ww*4/11){
    image(street[3], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*4/11 && mouseX < ww*5/11){
    image(street[4], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*5/11 && mouseX < ww*6/11){
    image(street[5], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*6/11 && mouseX < ww*7/11){
    image(street[6], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*7/11 && mouseX < ww*8/11){
    image(street[7], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*8/11 && mouseX < ww*9/11){
    image(street[8], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*9/11 && mouseX < ww*10/11){
    image(street[9], ww/2, wh/2, wh*ratio, wh);
  }
  else if (mouseX >=ww*10/11) {
    image(street[10], ww/2, wh/2, wh*ratio, wh);
  }
}