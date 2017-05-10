const pkg = require('./package.json');

export default {
	entry: 'src/index.js',
	targets: [
		{ dest: pkg.main, format: 'cjs' },
		{ dest: pkg.module, format: 'es' }
	],
	external: ['butternut', 'rollup-pluginutils']
};
