import path from 'path';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import { codeNames } from './codeNames';

function utf8ToB64(str: string) {
  return btoa(unescape(encodeURIComponent(str)));
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  for (const [_index, codeName] of codeNames.slice(0, 10).entries()) {
    const codePath = path.join(__dirname, '../codes/', `${codeName}.js`);
    const codeText = (await fs.readFile(codePath)).toString().trim();

    const page = await browser.newPage();
    await page.setViewport({ width: 2000, height: 2000, deviceScaleFactor: 2 });

    const TITLE = `${codeName}.js`;
    const CODE = utf8ToB64(codeText);
    const COLORS = 'breeze';
    const BACKGROUND = 'true';
    const DARK_MODE = 'true';
    const PADDING = '32';
    const LANGUAGE = 'javascript';

    const codeUrl = `https://ray.so/?colors=${COLORS}&background=${BACKGROUND}&darkMode=${DARK_MODE}&padding=${PADDING}&title=${TITLE}&code=${CODE}&language=${LANGUAGE}`;
    console.log(codeUrl);
    await page.goto(codeUrl);

    const screenshotTarget = '#frame';
    await page.waitForSelector(screenshotTarget);
    await new Promise((r) => setTimeout(r, 1000));
    const element = await page.$(screenshotTarget);
    await element?.screenshot({
      path: path.join(__dirname, '../images', `${codeName}.png`),
    });

    await page.close();
  }

  await browser.close();
})();
