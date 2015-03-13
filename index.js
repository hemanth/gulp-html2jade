'use strict';
var map = require('map-stream');
var es = require('event-stream');;
var gutil = require('gulp-util');
var html2jade = require('html2jade');

module.exports = function(options) {
  options = options || {};
  return es.map(function (file, cb) {
 	var html = file.contents.toString();
	    html2jade.convertHtml(html, options, function (err, jade) { 
	    //console.log(jade);
	    file.contents = new Buffer( jade );
	    file.path = gutil.replaceExtension(file.path, '.jade');
	    cb(null,file);
	});
  });
};
