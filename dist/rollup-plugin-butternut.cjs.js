'use strict';

var butternut = require('butternut');

function butternut$1(options) {
	return {
		name: 'butternut',

		transformBundle: function(code) {
			return butternut.squash(code, options);
		}
	};
}

module.exports = butternut$1;
