// Example usage:
// node screenshot.js http://google.com 1400 800

var Nightmare = require('nightmare');
var nightmare = Nightmare();

var url = process.argv[2];
var width = process.argv[3] || 1400;
var height = process.argv[4] || 860;
var delayInMs = process.argv[5] 10000;

var formattedDate = new Date().toISOString().replace(/:/g, '-');
var path = './png/' + formattedDate + '.png';

nightmare
  .goto(url)
  .viewport(width, height)
  .wait(delayInMs)
  .screenshot(path)
  .end()
  .then();
