const {
 emptyObject, 
 saasBook,
 Book,
 instanceOf
} = require('./01_simple_objects')

describe('01 - An empty Object', () => {
  var object = emptyObject()
  it('Has a constuctor',()=>{
    expect(object.constructor).toBe(Object)
  })
  it('Has a toString method', () => {
    expect(object.toString()).toEqual('[object Object]')
  })
  it('Has a valueOf method', () =>{
    expect(object.valueOf()).toEqual({})
  })
})

describe('02 - Describe Saas book', () => {
  var book = saasBook()
  it('Has a constructor', () => {
    expect(book.constructor).toBe(Object)
  })
  it('Has a name', () => {
    expect(book.name).toEqual('Software as a Service')
  })
  it('Has authors', () =>{
    expect(book.authors.constructor).toBe(Array)
  })
  it('Each author is an object with "name" and "lastName"', () => {
    expect(book.authors.length >= 1).toBe(true)
    book.authors.forEach((author) => {
      expect(author.constructor).toBe(Object)
      expect(author.name.constructor).toBe(String)
      expect(author.lastName.constructor).toBe(String)
    })
  })
  it('Has a fullName method', () => {
    expect(book.fullName()).toEqual('Software as a Service by Armando Fox David Patterson')
  })
})

describe('03 - Describe a Constructor function', () => {
  const funBook = new Book('El economista camuflado', 'Tim Hardford')
  const funBookTwo = new Book('Freakonomincs', 'Steven Levitt')

  it('Has a constructor', () => {
    expect(funBookTwo.constructor).toEqual(Book)
  })

  it('Creates new objects ', () => {
    expect(funBook.fullName()).toEqual("El economista camuflado por: Tim Hardford")
    expect(funBookTwo.fullName()).toEqual("Freakonomincs por: Steven Levitt")
  })

})
describe('04 - instanceof', () => {
  it('instanceof test for a specific constructor function ', () => {
    const {
      isInstanceOfBook,
      isInstanceOfFunction,
      isInstanceOfObject
    } = instanceOf()

    expect(isInstanceOfBook).toBe(true)
    expect(isInstanceOfFunction).toBe(true)
    expect(isInstanceOfObject).toBe(true)
  })
})

