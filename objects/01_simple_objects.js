function emptyObject(){
}

function saasBook(){
  var book = {
    authors: [],
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
  this.fullName = function() {}
}

function instanceOf(){
  var book =  {}
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
