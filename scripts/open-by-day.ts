import path from 'path';
import { codeNames } from './codeNames';
import { $ } from './utils';

const arg = process.argv[2];

const day = +arg;
if (!Number.isInteger(day)) {
  throw new Error('숫자를 입력해주세요.');
}

const codeName = codeNames[day - 1];

const descriptionPath = path.join(
  __dirname,
  '../descriptions/',
  `${codeName}.md`
);
const translationPath = path.join(
  __dirname,
  '../translations/',
  `${codeName}.md`
);

const main = async () => {
  $`code ${descriptionPath}`;
  $`code ${translationPath}`;
};

main();
