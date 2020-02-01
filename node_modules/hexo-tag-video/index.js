/**
* video tag
*
* Syntax:
*   {% video 'videoCode' %}
*
* Sample:
*   {% video '<iframe height=498 width=510 src="http://player.youku.com/embed/XNTkyMTM0MzY4" frameborder=0 allowfullscreen></iframe>' %}
*
*/

hexo.extend.tag.register('video', function(args, content, options){

  for (var i = 0; i < args.length; ++i) {
    if (args[i].search('height') !== -1 || args[i].search('width') !== -1 || args[i].search('style') !== -1)
      args[i] = '';
  };

  var videoCode = args.join(' ');
  videoCode = videoCode.replace(/(^\s*\')|(\'\s*$)/g, "");

  return '<div class="video-container">' + videoCode + '</div>';
});
