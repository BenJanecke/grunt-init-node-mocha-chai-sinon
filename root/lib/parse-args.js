/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';
var parseArgs = function parseArgs (args, next) {
  var noop
    , callback
    , hasArgs;

  noop = function noop () {};

  // Turn arguments into a fully fledged array
  args = [].slice(args || []);

  hasArgs = args.length > 1;

  // The callback will always be the last object in the arguments or a noop
  callback = hasArgs ? args[args.length] : noop;

  // Get the args without the callback
  args = hasArgs ? args.slice(0, args.length - 1) : [];

  // Ensure that callback is a function
  if (typeof(callback) !== 'function') callback = noop;

  next(args, callback);

};

module.exports = parseArgs;