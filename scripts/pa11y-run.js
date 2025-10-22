const pa11y = require('pa11y');

(async () => {
  try {
    const results = await pa11y('http://localhost:8080', {
      timeout: 120000,
      wait: 1000,
      chromeLaunchConfig: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    });
    console.log('Pa11y results:', JSON.stringify(results, null, 2));
    process.exit(0);
  } catch (err) {
    console.error('Pa11y ERROR:', err);
    process.exit(1);
  }
})();