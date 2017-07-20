'use strict';

var Analytics = require('@astronomerio/analytics.js-core').constructor;
var integration = require('@astronomerio/analytics.js-integration');
var sandbox = require('@segment/clear-env');
var tester = require('@segment/analytics.js-integration-tester');
var Netmining = require('../lib/index');

describe('Netmining', function() {
  var analytics;
  var netmining;
  var options = {
      aid: 1234,
      src: 'test.com',
  };

  beforeEach(function() {
    analytics = new Analytics();
    netmining = new Netmining(options);
    analytics.use(Netmining);
    analytics.use(tester);
    analytics.add(netmining);
  });

  afterEach(function() {
    analytics.restore();
    analytics.reset();
    netmining.reset();
    sandbox();
  });

  it('should have the correct settings', function() {
    analytics.compare(Netmining, integration('Netmining')
      .option('aid', '')
      .option('src', ''));
  });
});
