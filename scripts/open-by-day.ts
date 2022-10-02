import path from 'path';
import { codeNames } from './codeNames';
import { $ } from './utils';

const arg = process.argv[2];

const day = +arg;
if (!Number.isInteger(day)) {
  throw new Error('숫자를 입력해주세요.');
}

const codeName = codeNames[day];

const descriptionPath = path.join(
  __dirname,
  '../descriptions/',
  `${codeName}.txt`
);
const translationPath = path.join(
  __dirname,
  '../translations/',
  `${codeName}.txt`
);

const main = async () => {
  await $`code ${descriptionPath}`;
  await $`code ${translationPath}`;
};

main();
