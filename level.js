function Level() {
    this.top = 10;
    this.bottom = 10;
    this.x = width;
    this.w = 20;
    this.speed = 1;

    this.show = function() {
        fill(255);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }
}
