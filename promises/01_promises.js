/* 
  Las promesas
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

function returnValuesWithPromise() {
  /*
      El objeto Promise recibe un callback como inicializador.
      Luego la Promesa ejecutará este callback pasando 2 funciones.
      El primero se denomina "resolve".
  */
  var promise = new Promise(function (resolve, reject) {
    /*
      Cuando ejecutamos esta pasandole un argumento, se generará el procedimiento de resolución y quienes
      se hayan "suscrito" a través del método .then()
    */
    resolve('success value')
  })

  return promise
  // .then() retorna la misma promesa.
  .then(function (value) {
    console.log('Valor exitoso 1', value)
  })
  // Podemos seguir encadenando más .then()
  // ¿Ambos .then() recibirán el mismo valor?
  // .then(function (value) {
  //   console.log('Valor exitoso 2', value)
  // })

  // si comentamos el return anterior pero concatenando los .then 
  //return promise
}

function rejectValuesWithPromise() {
  /*
    El objeto Promise recibe un callback como inicializador.
    Luego la Promesa ejecutará este callback pasando 2 funciones.
    El segundo se denomina "reject".
  */
  var promise = new Promise(function (resolve, reject) {
    /*
      Cuando ejecutamos esta pasandole un argumento, se generará el procedimiento de rechazo
    */
    reject(new Error('Server fatal error'))
  })

  return promise
    //  .catch() retorna una NUEVA promesa.
    .catch(function (error) {
      console.log('Valor fallido 1', error.message)
      // Una vez que se envia un valor de retorno en un .catch este ya no genera expeciones por lo tanto ahora este valor activara los callbacks en .then
      // return { 
      //   message: error.message
      // }
      // return error
    })
    //  Podemos segurir encadenando más .catch()?
    // .then(function(value){
    //   console.log(value);
    //   return value
    // })
    // .catch(function (error) {
    //   console.log('Valor fallido 2', error)
    //   return { 
    //     message: error.message
    //   }
    // })
}

function returnValuesWithRelatedPromises() {
  var getUserInfo = function (userId) {
    return Promise.resolve({ id: 1, name: 'Eli', benefitsId: 10 })
  }
  var getUserBenefits = function (benefitsId) {
    return Promise.resolve({ results: 'User without benefits'})
  }

  /* La segunda promesa necesita el valor del resultado de la primera */
  var userId = 1
  return getUserInfo(userId)
    .then(function (response) {
      console.log('Primer resultado', response)

      // De ahora en adelante los siguientes .then() serán relacionados a esta promesa.
      return getUserBenefits(response.benefitsId)
    })
    .then(function (response) {
      console.log('Segundo resultado', response)
      //  return response
    })
}

function returnValuesWithParallelPromises () {
  var getUserInfo = function (userId) {
    return Promise.resolve({ id: 1, name: 'Eli', benefitsId: 10 })
  }
  var getUserBenefits = function (userId) {
    return Promise.resolve({ results: 'User without benefits'})
  }

  /* Ambas promesas funcionan en paralelo utilizando el mismo ID */
  var userId = 1

  //Cada uno de los elementos de este arreglo deben ser del tipo Promise
  var requestsList = [
    getUserInfo(userId), // <-- importante ejecutar el método
    getUserBenefits(userId)
  ]
  
  return Promise.all(requestsList)
    .then(function (results) {
      console.log('Resolved values as array', results)
    })
}

function returnValuesFirstOtherPromises() {
  var getUserInfo = function (userId) {
    
    // return Promise.resolve(
    //   { id: 1, name: 'Eli', serverName: 'server1' }
    // )
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve({ id: 1, name: 'Eli', serverName: 'server1' })
      } , 1000)
    })
  }
  var getUserInfoFromAnotherServer = function (userId) {
    // return new Promise(function (resolve) {
    //   setTimeout(function () {
    //     resolve({ id: 1, name: 'Eli', serverName: 'server2' })
    //   } , 1500)
    // })
    return Promise.resolve(
      { id: 1, name: 'Eli', serverName: 'server2' }
    )
  }

  var userId = 1
  var requestsList = [
    getUserInfo(userId), // <-- importante ejecutar el método
    getUserInfoFromAnotherServer(userId)
  ]

  return Promise.race(requestsList)
    .then(function (response) {
      console.log('Resolved the first value returned', response)
      return response
    })
}


module.exports = {
  returnValuesWithPromise: returnValuesWithPromise,
  rejectValuesWithPromise: rejectValuesWithPromise,
  returnValuesWithRelatedPromises: returnValuesWithRelatedPromises,
  returnValuesWithParallelPromises: returnValuesWithParallelPromises,
  returnValuesFirstOtherPromises: returnValuesFirstOtherPromises
}
