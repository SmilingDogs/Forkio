const { src, dest} = require("gulp");
const fileinclude = require("gulp-file-include");
const browserSync = require('browser-sync').create();

const html = () => {
    return src(['./src/html/index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
            }))
		.pipe(dest('./'))
		.pipe(browserSync.stream());
}

exports.html = html;