class Circle {
    constructor(init_pos, _radius, _color) {
        this.radius = _radius;
        this.color = _color;
        this.pos = init_pos;
    }

    draw() {
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }
}

class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

let radius = 10;
let CANVAS_SIZE = new Vector2(200, 200);


function setup() {
    createCanvas(CANVAS_SIZE.x, CANVAS_SIZE.y);

    frameRate(30);
}

function draw() {
    // ellipse(640, 360, x, x);
    let c = new Circle(new Vector2(CANVAS_SIZE.x / 2, CANVAS_SIZE.y / 2), radius, getRandomColor());
    c.draw();

    radius++;
    if (radius >= 100) radius = 10;

}

function getRandomColor() {
    return [getRandomColorElement(), getRandomColorElement(), getRandomColorElement()];
}

function getRandomColorElement() {
    return Math.floor(Math.random() * (255 + 1));
}