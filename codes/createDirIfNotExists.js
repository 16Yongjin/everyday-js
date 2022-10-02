const fs = require('fs');

const createDirIfNotExists = dir =>
  !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;

// 예시
createDirIfNotExists('test');
// creates the directory 'test', if it doesn't exist
