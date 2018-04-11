import { squash } from 'butternut';

function butternut(options) {
	return {
		name: 'butternut',

		transformBundle: function(code) {
			return squash(code, options);
		}
	};
}

export default butternut;
