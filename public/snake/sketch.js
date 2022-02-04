var s;
var force = 5;

function setup() {
	createCanvas(window.innerWidth * 0.6, window.innerHeight * 0.6).parent(
		'canvas'
	);
	background(200);
	x = width / 2;
	y = height / 2;
	size = 10;
	s = new Snake(random(width), random(height), 20);
	s.addForce(-force, 0);
	frameRate(5);
}
function windowResized() {
	resizeCanvas(window.innerWidth * 0.6, window.innerHeight * 0.6);
	s.reset();
}
function keyPressed() {
	if (key == 'ArrowLeft') {
		console.log('left');
		s.left();
		// s.addForce(-y, -x);
	}
	if (key == 'ArrowRight') {
		s.right();
		console.log('right');
		// s.addForce(y, x);
	}
	// console.log('after change : x :', s.acc.x, ' y: ', s.acc.y);
}
function draw() {
	background(200);
	fill(0);
	s.update();
	s.show();
}
