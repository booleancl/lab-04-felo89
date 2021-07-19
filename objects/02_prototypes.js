function prototypes(){
  function Foo(){}

  return Foo.constructor
}

function Gadget(name, color) {
  this.name = name
  this.color = color
  this.whatAreYou = function () {
    return 'I am a ' + this.color + ' ' + this.name
  }
}

// Gadget.prototype.price = 100;
// Gadget.prototype.rating = 3;
// Gadget.prototype.getInfo = function () {
//   return 'Rating: ' + this.rating + ', price: ' + this.price;
// };

// Gadget.prototype = {
//   price: 100,
//   rating: 3,
//   getInfo: function () {
//     return 'Rating: ' + this.rating + ', price: ' + this.price;
//   },
//   get: function(property){
//     return this[property]
//   } 
// };

module.exports = {
  prototypes: prototypes,
  Gadget: Gadget
}