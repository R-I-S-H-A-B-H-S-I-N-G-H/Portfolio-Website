const disTag = document.getElementById('distance');

class Snake {
	constructor(x, y, size) {
		this.dir = 1;
		this.speed = 5;
		this.dirRef = [createVector( 0, -1 ),createVector( 1,0 ),createVector( 0, 1 ),createVector( -1, 0 )];
		this.pos = createVector(x,y);
		this.size = size;
		this.acc = createVector(0,0);
		this.hit = false;
		this.food = createVector(
			random(this.size, width - this.size),
			random(this.size, height - this.size),
			Math.floor(size / 2)
		);
		
	}
	generateFood() {
		this.food.x = random(this.size, width - this.size);
		this.food.y = random(this.size, height - this.size);
	}
	show() {
		noStroke();
		fill(255, 0, 0);
		rect(this.food.x, this.food.y, this.food.z);
		stroke(255);
		fill(0);
		rect(this.pos.x, this.pos.y, this.size);
	}
	collision() {
		return (
			this.pos.x >= width ||
			this.pos.x <= 0 ||
			this.pos.y >= height ||
			this.pos.y <= 0
		);
	}

	foodCollison() {
		var d = dist(this.pos.x, this.pos.y, this.food.x, this.food.y);		
		return d <= this.size / 2;
	}
	update() {
		// this.pos.x += this.acc.x;
		// this.pos.y += this.acc.y;
		this.pos.add(this.acc);
		if (this.collision()) {
			this.reset();
		}
		if (this.foodCollison()) {
			this.generateFood();
		}
	}
	left() {
		this.dir -= 1;
		if (this.dir < 0) { 
			this.dir = 3;
		}
		this.addForce(this.dirRef[this.dir].x*this.speed,this.dirRef[this.dir].y*this.speed);
	}
	right() {
		this.dir += 1;
		this.dir = this.dir % 4;
		this.addForce(this.dirRef[this.dir].x*this.speed,this.dirRef[this.dir].y*this.speed);		
	}
	addForce(x, y) {
		this.acc.x = x;
		this.acc.y = y;
	}
	reset() {
		this.pos.x = width / 2;
		this.pos.y = height / 2;
		console.log('rest');
	}
}
