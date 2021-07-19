const {
  handlePromisesInDifferentFiles
} = require('./02_working_with_promises')

describe('Promises', () => {
  it('01 - returns a promise that handle response in anothe file', async () => {
    const returnValue = await handlePromisesInDifferentFiles()

    expect(returnValue).toEqual([ 10, 10, 6, 4 ])
  })
})


