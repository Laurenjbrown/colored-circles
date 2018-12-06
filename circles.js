var number = 20;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100, 200, 200);
	fill (200, 0, 200);
	ellipse(windowWidth / 2, windowHeight / 2, 40, 40);
}

function mouseClicked() {
	fill (200, 0 + number / 2, 200 - number / 2);
	ellipse(windowWidth / 2 + number, windowHeight / 2, 40 + number, 40 + number);
	ellipse(windowWidth / 2 - number, windowHeight / 2, 40 + number, 40 + number);
	number += 20;
	
}
