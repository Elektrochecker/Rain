let  l = 400;
let rain = [];
let dropMax = 40;
let sizeX = 4;
let sizeY = 16;
let offset = l;
let layers;
let fps;

function setup() {
  fps = Math.floor(windowHeight/12);
  l = windowWidth-20;
  h = windowHeight-20;
  dropMax = l*h/4000;
  dropMax = Math.floor(dropMax);
  layers = Math.floor(fps/25)+1;
  createCanvas(l, h);
  frameRate(fps);
  alert(fps+" fps, "+layers+" layers, "+dropMax+" drops");
}

function draw() {
  background(50);
  frameRate(fps);

  for (var i=0; i< dropMax; i++) {
    if (!rain[i]) {
      rain[i] = new Drop();
    } else {
      rain[i].show();
    }

    if (rain[i].posY > h) {
      rain[i] = false;
    } else {
      rain[i].fall(rain[i].vel, 0);
    }

  }
}

function Drop() {
  this.posX = Math.floor(Math.random()*l);
  this.posY = -(Math.floor(Math.random()*offset));
  this.vel = Math.floor(Math.random()*layers)+1;
  this.fall = function(a, b) {
    this.posY += a;
    this.posX += b;
  }
  this.show = function() {
    fill(200/layers*this.vel, 200/layers*this.vel, 255);
    noStroke();
    rect(this.posX, this.posY,sizeX,sizeY);
  }
}
