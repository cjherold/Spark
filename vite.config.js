import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import pageData from './pageData';
import routes from './routes';

const handlebarsOptions = {
	context: urlEnding => pageData[urlEnding],
	partialDirectory: resolve('./src/partials'),
};

export default {
	root: resolve('./src'),
	plugins: [
		// inject({ $: 'jquery' }), // maybe jquery?
		handlebars(handlebarsOptions),
	],
	build: {
		outDir: '../dist',
		rollupOptions: {
			input: routes,
		},
	},
};
