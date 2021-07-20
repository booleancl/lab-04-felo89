var monkey = {
  feeds: "bananas",
  breathes: "air",
};

function Human() {}

Human.prototype = monkey;

var developer = new Human();

developer.feeds = "pizza";
developer.hacks = "Javascript";
developer.breathes = "air";

module.exports = {
  developer: developer,
  Human: Human,
};
