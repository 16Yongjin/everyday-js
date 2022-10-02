import path from 'path';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import { codeNames } from './codeNames';
import { createCarbonUrl } from './url';

(async () => {
  const browser = await puppeteer.launch();

  for (const [index, codeName] of codeNames.entries()) {
    const codePath = path.join(__dirname, '../codes/', `${codeName}.js`);
    const codeText = (await fs.readFile(codePath)).toString().trim();
    const codeUrl = createCarbonUrl(codeText);

    const page = await browser.newPage();
    await page.setViewport({ width: 1500, height: 2000, deviceScaleFactor: 2 });

    console.log(index, codeName);
    await page.goto(codeUrl);

    const screenshotTarget = '#export-container';

    await page.waitForSelector(screenshotTarget);

    // 카본 줄바꿈 버그 대응
    await page.type('textarea', ' ');
    await page.click('footer');

    const element = await page.$(screenshotTarget);
    await element?.screenshot({
      path: path.join(__dirname, '../images', `${codeName}.png`),
    });

    await page.close();
  }

  await browser.close();
})();
