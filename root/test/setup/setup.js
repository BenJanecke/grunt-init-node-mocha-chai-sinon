// Yes these are supposed to be global
chai = require('chai');
expect = chai.expect;
sinon = require('sinon');

var testSetup = (function testSetup () {
  // Test setup code goes here
  var sinonChai = require('sinon-chai');
  chai.use(sinonChai);
})();

module.exports = testSetup;