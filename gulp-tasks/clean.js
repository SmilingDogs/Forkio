const del = require('del');

const clean = () => {
	return del(['dist/*', 'index.html'])
}

exports.clean = clean;