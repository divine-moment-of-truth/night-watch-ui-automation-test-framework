module.exports = {
	tags: ['google'],
	'Google advanced search: Elon Musk'(browser) {
		const mainQuery = 'Elon Musk';
		const mainQueryInputSelector = 'input[name="as_q"]';
		
		const languageDropdownOpenerSelector = '#lr_button';
		const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';

		const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
		const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';

		const submitButtonSelector = '.jfk-button[type="submit"]';

		const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;

		// const resultsPageLanguageSelector = '[aria-label="Search Italian pages"]';
		const resultsPageLastUpdateSelector = '[aria-label="Past month"]';

		//debugger;

		browser
				.url('https://www.google.co.uk/advanced_search')
				.setValue(mainQueryInputSelector, mainQuery)
				.click(languageDropdownOpenerSelector)
				.click(languageDropdownValueSelector)
				.click(lastUpdateDropdownOpenerSelector)
				.click(lastUpdateDropdownValueSelector)

				.perform(() => { debugger; })
				
				.click(submitButtonSelector)

				// Assertion Section
				// Assert that query parameter in browser address bar contains - 'as_q=Elon+Musk'
				.assert.urlContains('as_q=Elon+Musk', 'Query is Elon Musk')

				// Assert that query parameter in browser address bar contains - 'lr=lang_it'
				.assert.urlContains('lr=lang_it', 'Language is Italian')

				// Assert that query parameter in browser address bar contains - 'as_qdr=m'
				.assert.urlContains('as_qdr=m', 'Time period is last month')

			// browser.expect.element(resultsPageQuerySelector).to.be.visible
			browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input')
			// browser.assert.containsText(resultsPageLanguageSelector, 'Search Italian pages', 'UI: Language is set to Italian')
			browser.assert.containsText(resultsPageLastUpdateSelector, 'Past month', 'UI: Last update is set to Past Month')

			browser.saveScreenshot('tests_output/google.png')

	}
}