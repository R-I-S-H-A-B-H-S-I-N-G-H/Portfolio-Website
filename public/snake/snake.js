class Snake {
	constructor(x, y, size) {
		this.pos = { x: x, y: y };
		this.size = size;
		this.acc = { x: 0, y: 0 };
		this.hit = false;
	}

	show() {
		fill(0);
		rect(this.pos.x, this.pos.y, this.size, this.size);
	}
	update() {
		this.pos.x += this.acc.x;
		this.pos.y += this.acc.y;
		if (
			this.pos.x >= width ||
			this.pos.x <= 0 ||
			this.pos.y >= height ||
			this.pos.y <= 0
		) {
			this.reset = false;
			this.pos.x = width / 2;
			this.pos.y = height / 2;
		}
	}
	addForce(x, y) {
		this.acc.x = x;
		this.acc.y = y;
	}
	reset() {
		this.reset = false;
		this.pos.x = width / 2;
		this.pos.y = height / 2;
	}
}
