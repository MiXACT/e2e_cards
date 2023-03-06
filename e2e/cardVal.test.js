import puppeteer from 'puppeteer';

describe('Page start', () => {
	let browser;
  
	beforeEach(async () => {
		browser = await puppeteer.launch({
			// executablePath: '/usr/bin/chromium-browser',
			// args: ['--no-sandbox'],
			headless: false,
			slowMo: 100,
			devtools: true,
		});

		// browser = await puppeteer.launch({
		// 	headless: true,
		// 	args: ['--no-sandbox', '--disable-setuid-sandbox'],
		// });
	});

	test('test', () => {});
});
