'use strict';

var integration = require('@astronomer/analytics.js-integration');

/*
 *Expose 'Netmining' integration.
 */

var Netmining = module.exports = integration('Netmining')
.global('netmining')
.option('src', '')
.option('aid', '');

/*
* Initialize Netmining
*/

Netmining.prototype.initialize = function() {
  //snippet from netmining
  +function() {
    var Data = {}
    ,i=Data,d=document,u=encodeURIComponent,x=z='',j=d.createElement('script'),
    r=d.referrer,s=d.getElementsByTagName('script')[0];j.type='text/javascript';
    j.async=!0;r&&r.split(/[/:?]/)[3]!=d.location.hostname&&(i.ref=r);for(y in i)
    x+='&'+y+'='+u(i[y]);j.src=`${this.options.src}`
    +`?aid=${this.options.aid}&siclientid=`+x;s.parentNode.insertBefore(j,s);
  }();
  this.ready();
};

Netmining.prototype.loaded = function() {
  return true;
}
