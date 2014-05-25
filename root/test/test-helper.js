global.chai = require('chai');
global.expect = chai.expect;
global.sinon = require('sinon');

function setup () {
  setupChai();
};

function setupChai() {
  chai.use(require('sinon-chai'));
}

module.exports = setup();