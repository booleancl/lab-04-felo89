const {
 prototypes,
 Gadget,
 developer
} = require('./02_prototypes')

describe('Prototype property of functions', () => {

  it('01 - Every function has a prototype property and prototype property is an object', () => {
    const fooContructor = prototypes()

    expect(typeof fooContructor).toEqual('object')
    expect(fooContructor).toEqual({})
  })

  it('02 - Adding and using properties to the prototype object', () => {
   const gadget = new Gadget('webcam', 'black')
   expect(gadget.name).toEqual('webcam')
   expect(gadget.color).toEqual('black')
   expect(gadget.price).toEqual(100)
   expect(gadget.rating).toEqual(3)
   expect(gadget.getInfo()).toEqual("Rating: 3, price: 100")
   expect(gadget.get('color')).toEqual('black')
  })
})