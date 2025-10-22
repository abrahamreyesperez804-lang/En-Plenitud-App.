const httpServer = require('http-server');
const pa11y = require('pa11y');
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const axeCore = require('axe-core');

(async () => {
  const server = httpServer.createServer({ root: '.' });
  const listen = promisify(server.listen).bind(server);
  const close = promisify(server.close).bind(server);
  try {
    await listen(8080);
    console.log('Server started on http://localhost:8080');

    // Use pa11y first (faster for some problems). If it times out, log and continue.
    try {
      const p = await pa11y('http://localhost:8080', { timeout: 240000, wait: 1000 });
      fs.writeFileSync('pa11y-report.json', JSON.stringify(p, null, 2));
      console.log('Pa11y report written to pa11y-report.json');
    } catch (err) {
      console.warn('Pa11y failed or timed out, continuing to axe. Error:', err && err.message ? err.message : err);
    }

    // Run axe-core in the browser context via puppeteer
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('http://localhost:8080', { waitUntil: 'networkidle2' });
    const results = await page.evaluate(async (axeSource) => {
      // eslint-disable-next-line no-eval
      eval(axeSource);
      // @ts-ignore
      return await axe.run();
    }, axeCore.source);

    fs.writeFileSync('axe-report.json', JSON.stringify(results, null, 2));
    console.log('Axe report written to axe-report.json');

    await browser.close();
    await close();
    process.exit(0);
  } catch (err) {
    console.error('ERROR in axe-run:', err);
    try { await close(); } catch (e) {}
    process.exit(1);
  }
})();