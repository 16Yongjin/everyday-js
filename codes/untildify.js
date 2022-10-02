const untildify = str =>
  str.replace(/^~($|\/|\\)/, `${require('os').homedir()}$1`);

// 예시
untildify('~/node'); // '/Users/aUser/node'
