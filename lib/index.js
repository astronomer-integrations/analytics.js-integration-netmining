'use strict';

var integration = require('@astronomerio/analytics.js-integration');
/*
 *Expose 'Netmining' integration.
 */

var Netmining = module.exports = integration('Netmining')
.option('aid', '')
.tag('netmining', '<script type="text/javascript" async="" src="{{ src }}?aid={{ aid }}&siclientid=">');

/*
* Initialize Netmining
*/

Netmining.prototype.initialize = function() {
    var locals = { src: window.location.href };
    this.load('netmining', locals, this.ready);
};
