const { parallel, series} = require("gulp");
const cleanTask = require("./gulp-tasks/clean").clean;
const htmlTask = require("./gulp-tasks/html").html;
const stylesTask = require("./gulp-tasks/styles").styles;
const scriptsTask = require("./gulp-tasks/scripts").scripts;
const imageTask = require("./gulp-tasks/img").img;
const serveTask = require("./gulp-tasks/serve").serve;


build = series(cleanTask, parallel(htmlTask,stylesTask,scriptsTask,imageTask));
dev = series(build, serveTask);

exports.build = build;
exports.dev = dev;
