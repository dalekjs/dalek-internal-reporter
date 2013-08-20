'use strict';

var expect = require('chai').expect;
var Reporter = require('../index.js');

describe('dalek-internal-reporter', function() {

  it('should exist', function() {
    console.log(Reporter);
    expect(Reporter).to.be.ok;
  });

});
