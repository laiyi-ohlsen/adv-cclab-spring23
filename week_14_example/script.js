let img; 



function preload() {
    img = loadImage('flowers.png')
}

function setup() {
    let c = createCanvas(400,400); 
    c.parent('canvas-wrapper')
}

function draw() {
    ellipse(200,200,50,50)
    image(img,mouseX,mouseY, 100,100)
}