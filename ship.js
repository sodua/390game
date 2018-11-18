function Ship() {
    this.y = height/2;
    this.x = 64;
    this.show = function() {
        fill(255);
        triangle(this.x, this.y, this.x, this.y-20, this.x+40, this.y-10);
    }

    this.up = function() {
        this.y = this.y - 10;
    }

    this.down = function() {
        this.y = this.y + 10;
    }

    this.right = function() {
        this.x = this.x + 10;
    }

    this.left = function() {
        this.x = this.x - 10;
    }
    
    this.update = function() {
        if (this.y > height) {
            this.y = height;
        }
        if (this.y < 0) {
            this.y = 0;
        }
    }
}
