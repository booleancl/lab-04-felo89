const {
  returnValuesWithPromise,
  rejectValuesWithPromise,
  returnValuesWithRelatedPromises,
  returnValuesWithParallelPromises,
  returnValuesFirstOtherPromises
} = require('./01_promises')

describe('Promises', () => {
  it('01 - returns a promise that returns certain values as a chain', async () => {
    const returnValue = await returnValuesWithPromise()

    expect(returnValue).toEqual('success value')
  })

  it('02 - returns a promises that return an error', async () => {
    const rejectedValue = await rejectValuesWithPromise()

    expect(rejectedValue.message).toEqual('Server fatal error')
    expect(rejectedValue).not.toBeInstanceOf(Error)
  })

  it('03 - returns a value from second promise related to the first one', async () => {
    const returnValue = await returnValuesWithRelatedPromises()

    expect(returnValue).toEqual({ results: 'User without benefits'})
  })

  it('04 - returns an array with results of multiple promises', async () => {
    const returnValue = await returnValuesWithParallelPromises()

    expect(returnValue).toEqual([
      { id: 1, name: 'Eli', benefitsId: 10 },
      { results: 'User without benefits'}
    ])
  })

  it('05 - returns the first result of multiple promises forget the other ones', async () => {
    const returnValue = await returnValuesFirstOtherPromises()

    expect(returnValue).toEqual({ id: 1, name: 'Eli', serverName: 'server1' })
  })
})
