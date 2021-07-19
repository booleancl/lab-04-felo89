var monkey = {
  feeds: 'bananas',
  breathes: 'air'
}

function Human() {}

Human.prototype = {}

var developer = new Human();

developer.feeds = 'pizza'
developer.hacks = 'Javascript'

module.exports = {
  developer: developer,
  Human: Human,
}