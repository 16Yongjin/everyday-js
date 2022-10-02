import path from 'path';
import fs from 'fs/promises';
import { codeNames } from './codeNames';

/** 번역 텍스트 앞에 [수정 필요] 붙이기 */
const main = async () => {
  for (const [_index, codeName] of codeNames.entries()) {
    console.log(`modifying ${codeName}...`);
    const fileDir = path.join(__dirname, '../translations/', codeName + '.md');
    const fileText = (await fs.readFile(fileDir)).toString();

    const newFileText = `[수정 필요]\n${fileText}`;

    await fs.writeFile(fileDir, newFileText);
  }
};

main();
