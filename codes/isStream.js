const isStream = val =>
  val !== null && typeof val === 'object' && typeof val.pipe === 'function';

// 예시
const fs = require('fs');

isStream(fs.createReadStream('test.txt')); // true
