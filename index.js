class Polygon {
    constructor(array) {
        this.array = array
    }
    get countSides() {
       return this.array.length
    }
    get perimeter() {
        return this.array.reduce((side, a) => side + a, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
       return this.array[0] + this.array[1] > this.array[2] 
        &&
        this.array[1] + this.array[2] > this.array[0]
    }
}

class Square extends Polygon {
    get isValid() {
        return this.array.every(num => num === this.array[0])
    }
    get area() {
        return this.array[0] ** 2
    } 
}

const tri = new Triangle([1,2,4])
const square = new Square([2,2,2,2])
console.log(square.isValid)