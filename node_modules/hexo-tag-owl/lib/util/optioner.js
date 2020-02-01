'use strict';

var obja = require('object-assign');

/**
 * Options:
 *
 *   css - Options
 *           'default'
 *           'custom'
 *           'none'
 *
 *       - Default Value
 *           'none'
 *
 *       - Description
 *           whether use default stylesheet or not.
 *
 *       - Usage
 *           'default' : use default stylesheet at ../asset/css.styl
 *           'custom'  : use custom stylesheet with path at `file`
 *           'none'    : unable this feature
 *
 *   file - Data Type
 *            String
 *
 *        - Default Value
 *            'owl.css'
 *
 *        - Description
 *            path of css file
**/
var default_value = {
  css:  'none',
  file: 'owl.css'
};

module.exports = function (option) {
  var res = obja({}, default_value, option);
  return res;
}