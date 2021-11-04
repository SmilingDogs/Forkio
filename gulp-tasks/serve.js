const { watch } = require("gulp");
const browserSync = require('browser-sync').create();
const htmlTask = require("./html").html;
const stylesTask = require("./styles").styles;
const scriptsTask = require("./scripts").scripts;
const imageTask = require("./img").img;

const serve = () => {
	//запуск локального сервера
	browserSync.init({
		server: {
		baseDir: "./",
		},
		port: 5500,
		open: true,
	});

	//Следить за html файлами
 	watch('./src/html/*.html', htmlTask)
	//Следить за CSS файлами
 	watch('./src/scss/*.scss', stylesTask)
 	//Следить за JS файлами
	watch('./src/js/*.js', scriptsTask)
 	//Следить за Img файлами
 	watch('src/img/*', imageTask)
  	//При изменении в любых папках запустить синхронизацию
  	watch("./src/**/*").on('change', browserSync.reload);
}

exports.serve = serve;
