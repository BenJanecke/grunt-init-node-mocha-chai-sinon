var parseArgs = require('./../lib/parse-args');

describe('parseArgs', function () {
  it('expects an empty array and noop for empty arguments', function () {
    parseArgs([], function (args, next) {
      expect(args).to.equal([]);
      expect(next).to.be.an('function');
    });
  });

  it('expects the last argument passed to be returned as callback', function () {
    var noop = function () { return true; };
    parseArgs([ noop ], function (args, next) {
      expect(next).to.eq(noop);
    });
  });

  it('expects a noop for a non function passed as the last argument', function (){
    parseArgs([ 'non-function' ], function (args, next) {
      expect(next).to.be.an('function');
    });
  });

  it('expects arguments excluding the callback for multiple arguments', function (){
    var noop = function () { };
    parseArgs([ 'arg', noop ], function (args, next) {
      expect(args).to.eq([ 'arg' ]);
      expect(next).to.eq(noop);
    });
  });

});