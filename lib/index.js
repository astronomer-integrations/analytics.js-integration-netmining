'use strict';

var integration = require('@astronomer/analytics.js-integration');

/*
 *Expose 'Netmining' integration.
 */

var Netmining = module.exports = integration('Netmining');

/*
* Initialize Netmining
*/

Netmining.prototype.initialize = function() {
    this.ready();
};

Netmining.prototype.loaded = function() {
    return true;
}

/**
* Page
*
* @param { Facade } Page
* */

Netmining.prototype.page = function(page) {

}
