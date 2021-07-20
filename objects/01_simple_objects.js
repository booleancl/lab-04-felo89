function emptyObject(){
  return {}
}

function saasBook(){
  var book = {
    authors: [
      {
        name: 'Armando',
        lastName: 'Fox'
      },
      {
        name: 'David',
        lastName: 'Patterson'
      }
    ],
    name: 'Software as a Service',
    year: 2020,
    web: 'www.saasbook.info',
    fullName: function(){
      var authors = 'by'
      book.authors.forEach(function(author) {
        authors += ' ' + author['name'] + ' ' + author['lastName']
      });
      
      return book.name + ' ' + authors
    }
  }
  return book   
}

function Book(title, author){
  this.title = title,
  this.author = author,
  this.fullName = function() {
    return this.title + ' por: ' + this.author
  }
}

function instanceOf(){
  var book =  new Book
  return {
    isInstanceOfBook: book instanceof Book,
    isInstanceOfFunction: Book instanceof Function,
    isInstanceOfObject: Function instanceof Object
  }
}

module.exports = { 
  emptyObject: emptyObject,
  saasBook: saasBook,
  Book: Book,
  instanceOf: instanceOf
}
