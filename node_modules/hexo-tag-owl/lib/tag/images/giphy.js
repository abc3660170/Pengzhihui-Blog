'use strict';

module.exports = function (hexo, args) {
  var id = args[0];
  return '<div class="owl-media owl-image owl-giphy"><img src="https://media.giphy.com/media/' + id + '/giphy.gif"></div>';
}