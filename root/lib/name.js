/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';
var main = (function main () {
  var parseArgs = require('parse-args');
  parseArgs(arguments, function (args, next) {
    next();
  });
})();

module.exports = main;
