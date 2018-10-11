import puppeteer from 'puppeteer';
import { URL } from '../config';

const run = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false, slowmo: 250 });
    const page = await browser.newPage();

    page.setViewport({
      height: 1280,
      width: 1024
    });

    // need better error handling during scrapping
    await page.goto(URL)
      .catch(e => {
        console.log({ message: 'Provider not available', error: e });
      });
   
    // set headers to not look like a bot
    await page.setExtraHTTPHeaders({Referer: 'https://www.ebay.com/'});

    await page.waitForSelector('div.slashui-image-cntr > img');

    const deals = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('div.slashui-image-cntr > img'));
      return images.map(image => image.src).slice(0, 18);
    })
      .catch(e => {
        console.log({ message: 'Error scrapping', error: e })
      })
    ;

    await browser.close();
    return deals;

  } catch (err) {
    return new Error(err);
  }  
}

export {
  run
};
