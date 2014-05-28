'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var hogan = require('./index');

it('should convert HTML to JADE', function (cb) {
        var stream = hogan({handle: 'gnumanth'});

        stream.on('data', function (file) {
                assert.equal(file.relative, 'fixture.jade');
                assert.equal(file.contents.toString(), 'html\n  body Hello Gnumanth\n');
                cb();
        });

        stream.write(new gutil.File({
                path: 'fixture.html',
                contents: new Buffer('<html><body>Hello Gnumanth</body></html>')
        }));
});