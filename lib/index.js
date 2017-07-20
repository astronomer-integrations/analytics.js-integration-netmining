'use strict';

var integration = require('@astronomerio/analytics.js-integration');

/*
 *Expose 'Netmining' integration.
 */

var Netmining = module.exports = integration('Netmining')
.option('src', '')
.option('aid', '')
.tag('<script type="text/javascript" async="" src="{{ src }}?aid={{ aid }}&siclientid=">');

/*
* Initialize Netmining
*/

Netmining.prototype.initialize = function() {
  this.load(this.ready);
};
