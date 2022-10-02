import path from 'path';
import fs from 'fs/promises';
import { parseSnippet } from './parse';
import { codeNames } from './codeNames';

const main = async () => {
  for (const [_index, codeName] of codeNames.entries()) {
    console.log(`creating ${codeName}...`);
    const fileDir = path.join(__dirname, '../snippets/', codeName + '.md');
    const fileText = (await fs.readFile(fileDir)).toString();
    const { description } = parseSnippet(fileText);

    const descriptionDir = path.join(
      __dirname,
      '../descriptions/',
      codeName + '.md'
    );

    await fs.writeFile(descriptionDir, description);
  }
};

main();
