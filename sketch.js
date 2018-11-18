var ship;

function setup() {
    createCanvas(800, 480);
    ship = new Ship();
}

function draw() {
    background(0);
	ship.update();
    ship.show();
	if (keyIsDown(UP_ARROW)) {
		ship.up();
	}
	if (keyIsDown(DOWN_ARROW)) {
		ship.down();
	}
	if (keyIsDown(RIGHT_ARROW)) {
		ship.right();
	}
	if (keyIsDown(LEFT_ARROW)) {
		ship.left();
	}
}
