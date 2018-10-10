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

    await page.goto(URL);
   
    // set headers to not look like a bot
    await page.setExtraHTTPHeaders({Referer: 'https://www.ebay.com/'});

    await page.waitForSelector('div.slashui-image-cntr > img');

    const deals = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('div.slashui-image-cntr > img'));
      return images.map(image => image.src).slice(0, 18);
    });

    console.log(deals);

    await browser.close();

  } catch (err) {
    //TODO: sort out error handling here
    console.log(err)
  } 
    
   
}

export {
  run
};
