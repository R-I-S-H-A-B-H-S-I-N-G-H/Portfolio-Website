const disTag = document.getElementById('distance');
class Snake {
	constructor(x, y, size) {
		this.speed = 5;
		this.pos = { x: x, y: y };
		this.size = size;
		this.acc = { x: 0, y: 0 };
		this.hit = false;
		this.food = {
			x: random(this.size, width - this.size),
			y: random(this.size, height - this.size),
			z: Math.floor(size / 2),
		};
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
		if (disTag) {
			// disTag.innerText = d.toString();
		}
		return d <= this.size / 2;
	}
	update() {
		this.pos.x += this.acc.x;
		this.pos.y += this.acc.y;
		if (this.collision()) {
			this.reset();
		}
		if (this.foodCollison()) {
			this.generateFood();
		}
	}
	left() {
		var x, y;
		if (this.acc.x == -this.speed && this.acc.y == 0) {
			console.log('coming from left', this.acc.x, this.acc.y);
			x = Math.abs(this.acc.x);
			y = Math.abs(this.acc.y);
			this.addForce(y, x);
			console.log('updated value ', this.acc);
		} else {
			x = Math.abs(this.acc.x);
			y = Math.abs(this.acc.y);
			this.addForce(-y, -x);
		}
	}
	right() {
		var x, y;
		if (this.acc.x == -this.speed && this.acc.y == 0) {
			console.log('coming from left', this.acc.x, this.acc.y);

			x = Math.abs(this.acc.x);
			y = Math.abs(this.acc.y);
			this.addForce(y, -x);
			console.log('updated value ', this.acc);
		} else {
			x = Math.abs(this.acc.x);
			y = Math.abs(this.acc.y);
			this.addForce(y, x);
		}
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
