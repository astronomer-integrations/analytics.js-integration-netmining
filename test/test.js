'use strict';

var Analytics = require('@astronomerio/analytics.js-core').constructor;
var integration = require('@astronomerio/analytics.js-integration');
var sandbox = require('@segment/clear-env');
var tester = require('@segment/analytics.js-integration-tester');
var Netmining = require('../lib/index');

describe('Netmining', function() {
  var analytics;
  var Netmining;
  var options = {
      aid: 1234,
      src: 'test.com',
  };

  beforeEach(function() {
    analytics = new Analytics();
    Netmining = new Netmining(options);
    analytics.use(Netmining);
    analytics.use(tester);
    analytics.add(Netmining);
  });

  afterEach(function() {
    analytics.restore();
    analytics.reset();
    Netmining.reset();
    sandbox();
  });

  it('should have the correct settings', function() {
    analytics.compare(OutBrain, integration('OutBrain')
      .option('obAdvId', '')
      .option('events', []));
  });

  describe('after loading', function() {
    beforeEach(function(done) {
      console.log('we be out here working');
      analytics.stub(Netmining, 'load');
      analytics.once('ready', done);
      analytics.initialize();
    });
  });
});
