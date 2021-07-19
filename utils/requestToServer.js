module.exports = {
  get: function() { 
    const promise = Promise.resolve({
      data: {
        studentId: 1,
        grades: [ 10, 10, 6, 4 ]
      },
    })
 
    return promise.then(function(response){
      return response.data.grades
    })
  },
  post: function() {
    const promise = Promise.reject(
      new Error('You Must authenticated for send info')
    )

    return promise
  }
}
