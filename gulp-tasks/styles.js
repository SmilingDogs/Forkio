const { src, dest} = require("gulp");
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const browserSync = require('browser-sync').create();

const styles = () => {
	return src(['./src/scss/normalized.scss',
		'./src/scss/main.scss',])

		//конкатенация всех scss файлов в один styles.min.css
		.pipe(concat('styles.min.css'))
		//компиляция scss файлов в css
		.pipe(sass().on('error', sass.logError))
		//добавление вендорных префиксов к CSS свойствам для поддержки последних нескольких версий каждого из браузеров
		.pipe(autoprefixer({overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		//удаление неиспользуемого css-кода
		.pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
		// Сохранение файла в папке dist
		.pipe(dest('./dist/css/'))
		//слежение за изменением файлов
		.pipe(browserSync.stream());
}

exports.styles = styles;
