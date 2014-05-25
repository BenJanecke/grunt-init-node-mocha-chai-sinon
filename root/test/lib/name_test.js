'use strict';

var {%= js_test_safe_name %} = require('../lib/{%= name %}.js');

describe('{%= name %}', function () {
  it('expects a callback to be called', function () {
    var spy = sinon.spy();
    {%= js_test_safe_name %}(spy);
    expect(spy).to.have.been.called();
  });
});