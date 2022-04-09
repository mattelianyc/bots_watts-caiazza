require('dotenv').config()
const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({
    width: 960,
    height: 720,
    deviceScaleFactor: 1,
  });
  await page.goto('https://www.amazon.com/dp/B098PJNWKD/ref=cm_sw_r_oth_api_i_BFJJC42CZAHNS3CKD8YV');

  await page.waitFor(3000);

  await page.evaluate(() => {
    let confirmReservationsButtonXPathResult = document.evaluate("//a[contains(., 'See All Buying Options')]", document, null, XPathResult.ANY_TYPE, null )
    confirmReservationsButtonXPathResult.iterateNext().click();
  });

  await page.waitFor(15000);
  

})();
