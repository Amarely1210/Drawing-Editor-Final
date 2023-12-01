let string = "Bridge across Niagara Falls"
let stringStep = 0;
let Falls;
let size;
let backgrnd;

function preload() {
  Falls = loadImage('Bridge.png');
}

function setup() {
  backgrnd=createCanvas(650,600);
  print(string.length);
  size=15;
  background(70);
  
  

}

function draw() {
  stringline = Falls.get(mouseX, mouseY);
  fill(stringline);
  noStroke();
  textFont("Mr Dafoe");
  textSize(size);

  text(string.charAt(stringStep), mouseX, mouseY);
  stringStep++;
  if (stringStep > string.length) {
    stringStep = 0;
  }
}




