import path from 'path';
import puppeteer, { ElementHandle } from 'puppeteer';
import fs from 'fs/promises';
import { codeNames } from './codeNames';
import { createTranslateUrl } from './url';

(async () => {
  const browser = await puppeteer.launch();

  const start = 396;

  for (const [index, codeName] of codeNames.slice(start).entries()) {
    const descPath = path.join(__dirname, '../descriptions/', `${codeName}.md`);
    const description = (await fs.readFile(descPath)).toString().trim();
    const translateUrl = createTranslateUrl(description);
    console.log('[', index + start, codeName, ']');

    const page = await browser.newPage();
    await page.goto(translateUrl);

    const koElemSelector = '.VIiyi'; // 바뀔 수 있음
    const koTextElemSelector = '[jsname=W297wb]'; // 바뀔 수 있음
    await page.waitForSelector(koTextElemSelector);
    const koElement = await page.$(koElemSelector);
    const koText = await (koElement as ElementHandle<HTMLElement>)?.evaluate(
      (elem) => elem.innerText
    );

    console.log(koText);

    const translationPath = path.join(
      __dirname,
      '../translations/',
      `${codeName}.md`
    );

    fs.writeFile(translationPath, koText);

    await page.close();
  }

  await browser.close();
})();
