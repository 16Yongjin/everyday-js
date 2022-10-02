import { GoogleSpreadsheet } from 'google-spreadsheet';
import creds from './spreadsheet-key.json';
import path from 'path';
import fs from 'fs/promises';
import { parseSnippet } from './parse';
import { codeNames } from './codeNames';

const doc = new GoogleSpreadsheet('');

const main = async () => {
  await doc.useServiceAccountAuth(creds);

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  console.log(sheet.title);
  console.log(sheet.rowCount);

  await sheet.loadCells(`A2:F${codeNames.length + 1}`);

  for (const [index, codeName] of codeNames.entries()) {
    const fileDir = path.join(__dirname, '../snippets/', codeName + '.md');
    const fileText = await (await fs.readFile(fileDir)).toString();
    const { description } = parseSnippet(fileText);

    const Column = {
      index: 0,
      name: 1,
      description: 2,
      code: 4,
      example: 5,
    };
    const row = index + 1;
    const Cell = {
      index: sheet.getCell(row, Column.index),
      name: sheet.getCell(row, Column.name),
      description: sheet.getCell(row, Column.description),
      code: sheet.getCell(row, Column.code),
      example: sheet.getCell(row, Column.example),
    };

    Cell.index.value = row;
    Cell.name.value = codeName;
    Cell.description.value = description;
    // Cell.code.value = code;
    // Cell.example.value = example;
  }

  await sheet.saveUpdatedCells();
};

main();
