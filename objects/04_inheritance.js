function Shape(){
  this.name = 'Shape';
  this.toString = function () {
    return this.name
  };
}

function TwoDShape(){
  this.name = '2D shape'
}

function Triangle(side, height){
  this.name = 'Triangle'
  this.side = side
  this.height = height
  this.getArea = function () {
    return this.side * this.height / 2
  };
}

TwoDShape.prototype = new Object()
Triangle.prototype = new Object()

module.exports = {
  Triangle: Triangle,
  TwoDShape: TwoDShape,
  Shape: Shape
} 
