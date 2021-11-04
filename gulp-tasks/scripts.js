const { src, dest} = require("gulp");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

const scripts = () => {
	return src(['./src/js/main.js'])
		//конкатенация всех js файлов в один scripts.min.js
		.pipe(concat('scripts.min.js'))
		//минификация js кода
		.pipe(uglify({ toplevel: true }))
		// Сохранение файла в папке dist
		.pipe(dest('./dist/js/'))
		//слежение за изменением файлов
		.pipe(browserSync.stream());
}

exports.scripts = scripts;
