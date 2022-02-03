var s;
var force = 2;
function setup() {
	createCanvas(400, 400).parent('canvas');
	background(200);
	x = width / 2;
	y = height / 2;
	size = 10;
	s = new Snake(random(width), random(height), 20);
	s.addForce(force, 0);
}
function keyPressed() {
	// console.log(key);
	if (key == 'ArrowUp') {
		s.addForce(0, -force);
	}
	if (key == 'ArrowDown') {
		s.addForce(0, force);
	}
	if (key == 'ArrowLeft') {
		s.addForce(-force, 0);
	}
	if (key == 'ArrowRight') {
		s.addForce(force, 0);
	}
}
function draw() {
	background(200);
	fill(0);
	s.update();
	s.show();
}
