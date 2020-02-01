'use strict';

var config  = require('./config');
// TED 640x360
module.exports = function (hexo, args) {
  var id = args[0];
  var lang = args[1] ? ('lang/' + args[1] + '/') : '';
  return '<div class="owl-media owl-video owl-ted"><iframe src="https://embed.ted.com/talks/' + lang + id + '" width="640" height="360" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + config.iframe + '></iframe>'
}
