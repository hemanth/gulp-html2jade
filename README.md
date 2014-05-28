# gulp-[html2jade](https://github.com/donpark/html2jade) [ ![build-status](https://travis-ci.org/hemanth/gulp-html2jade.svg?branch=master) ](https://travis-ci.org/hemanth/gulp-html2jade)

> gulp plugin to HTML to jade format.

## Usage

First, install `gulp-html2jade` as a development dependency:

```shell
npm install --save-dev gulp-html2jade
```

Then, add it to your `gulpfile.js`:

Say our `index.html` is :

```html
<html>
  <body>Hello Gnumanth</body>
</html>
```

```javascript
var html2jade = require('gulp-html2jade');
var options = {nspaces:2};
gulp.task('default', function(){
  gulp.src('index.html')
    .pipe(html2jade(options))
    .pipe(gulp.dest('dist'));
});
```
Now dist will have `index.jade` with content as:

```jade
  html
  body Hello Gnumanth
```

Read more about the [options](https://github.com/donpark/html2jade#command-line-options) that you could use.


