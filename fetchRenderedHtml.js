const puppeteer = require('puppeteer');

const fetchRenderedHTML = async (url) => {
  try {
    // Launch a new browser instance
    const browser = await puppeteer.launch();

    // Create a new page in the browser
    const page = await browser.newPage();

    // Navigate to the specified URL
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Get the final rendered HTML content
    const html = await page.content();

    // Close the browser instance
    await browser.close();

    return html;
  } catch (error) {
    console.error('Error fetching rendered HTML:', error);
  }
};

// Example usage:
const url = 'http://localhost:3000';
fetchRenderedHTML(url).then((html) => {
  console.log('Rendered HTML:', html);
});
