const puppeteer = require('puppeteer');
const wait = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000');
  
  await wait(2000);
  
  const section = await page.$('#services');
  await section.screenshot({ path: 'services_before_scroll.png' });
  
  await page.evaluate(() => window.scrollBy(0, 500));
  await wait(1000);
  await page.screenshot({ path: 'services_scroll_500.png' });
  
  await page.evaluate(() => window.scrollBy(0, 1000));
  await wait(1000);
  await page.screenshot({ path: 'services_scroll_1500.png' });

  await browser.close();
})();
