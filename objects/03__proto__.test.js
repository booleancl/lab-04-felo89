const {
  developer,
  Human
} = require('./03__proto__')

describe('01 - The __proto__ link', () => {
  it('Instances have the __proto__ property', () => {
   expect(developer.hacks).toBe('Javascript')
   expect(developer.feeds).toBe('pizza')
   expect(developer.breathes).toBe('air')
   expect(developer.__proto__).toEqual({"breathes": "air", "feeds": "bananas"})
   expect(developer.__proto__).toEqual(Human.prototype)
  }) 
})