'use strict';

var expect = require('chai').expect;
var Reporter = require('../index.js');

describe('dalek-internal-reporter', function() {

  it('should exist', function() {
    var reporter = new Reporter();
    expect(reporter).to.be.ok;
  });

});
