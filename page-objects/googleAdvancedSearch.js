module.exports = {
	url: 'https://www.google.co.uk/advanced_search',
	elements: {
		mainQueryInput: 'input[name="as_q"]',
		languageDropdown: '#lr_button',
		lastUpdateDropdown: '#as_qdr_button',
		submitButton: '.jfk-button[type="submit"]',
	},
	commands: [{

		setQuery(value) {
			return this
				.setValue('@mainQueryInput', value);
		},

		selectFilter(selector, value) {
			return this
				.click(selector)
				.click(`.goog-menuitem[value="${value}"]`);
		},

		search() {
			return this
				.click('@submitButton');
		}
		
	}]
}; 
