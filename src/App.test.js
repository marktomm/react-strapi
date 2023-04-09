import puppeteer from 'puppeteer-core';

describe('App', () => {
  it('matches snapshot', async () => {
    // Specify the path to the Chrome browser executable
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium',
    });

    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

    const screenshot = await page.screenshot();
    await browser.close();

    expect(screenshot).toMatchImageSnapshot({
      // customSnapshotsDir: getSnapshotDir(),
      customSnapshotIdentifier: 'App',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });
  });
});