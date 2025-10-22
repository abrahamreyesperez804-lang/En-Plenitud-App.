const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
    await page.goto('http://localhost:8080', { waitUntil: 'networkidle2', timeout: 60000 });
    console.log('Page loaded successfully');
    await browser.close();
  } catch (err) {
    console.error('ERROR:', err);
    process.exit(1);
  }
})();