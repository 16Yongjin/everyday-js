const isReadableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object';

// 예시
const fs = require('fs');

isReadableStream(fs.createReadStream('test.txt')); // true
