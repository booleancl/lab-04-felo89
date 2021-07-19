const  { 
  Triangle,
  TwoDShape,
  Shape
 } = require('./04_inheritance')



describe('Simple inheritance', () => {
  it('01 - Prototype chain',() => {
    const triangle = new Triangle(3,5)
    expect(triangle instanceof Triangle).toEqual(true)
    expect(triangle instanceof TwoDShape).toEqual(true)
    expect(triangle instanceof Shape).toEqual(true)
  })
})