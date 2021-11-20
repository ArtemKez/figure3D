class Figure3D {
    constructor() {
        if (this.constructor === Figure3D) {
            throw new Error('cannot create abstract figure')
        }
    }

    isNumbers(...args) {
        for (const arg of args) {
            if (isNaN(arg)) {
                throw new Error('argument must be a number')
            }
        }
    }

    volume() {
        throw new Error('cannot use abstract method')
    }
}

class Sphere extends Figure3D {
    constructor(radius) {
        super();
        this.isNumbers(radius)
        this.radius = radius
    }

    volume() {
        return (4/3)* Math.PI * Math.pow(this.radius, 3);
    }
}

class Cylinder extends Figure3D {
    constructor(height, radius) {
        super();
        this.isNumbers(radius,height)
        this.height = height
        this.radius = radius
    }

    volume() {
        return this.height * Math.PI * this.radius * this.radius;
    }
}

class Cube extends Figure3D {
    constructor(width, height, length) {
        super();
        this.isNumbers(width,height,length)
        this.width = width
        this.height = height
        this.length = length
    }

    volume() {
        return this.width * this.height * this.length;
    }
}