import path from 'path';
import fs from 'fs/promises';
import { parseSnippet } from './parse';
import { codeNames } from './codeNames';

const main = async () => {
  for (const [_index, codeName] of codeNames.entries()) {
    console.log(`creating ${codeName}...`);
    const fileDir = path.join(__dirname, '../snippets/', codeName + '.md');
    const fileText = (await fs.readFile(fileDir)).toString();
    const { code, example } = parseSnippet(fileText);

    const codeDir = path.join(__dirname, '../codes/', codeName + '.js');

    const codeText = `${code}\n\n// 예시\n${example}\n`;

    await fs.writeFile(codeDir, codeText);
  }
};

main();
