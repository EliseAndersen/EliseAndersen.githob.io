function setup() {
	
	createCanvas(720,600);
}

function draw() {

	background("#002233");

	//this circle will follow my mouse
	fill("#44f3e0");
	ellipse(mouseX,mouseY,40,40);

	fill("blue");
	textSize(60);
	text("we are doing this", 60, 100);
}