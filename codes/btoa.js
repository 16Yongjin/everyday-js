const btoa = str => Buffer.from(str, 'binary').toString('base64');

// 예시
btoa('foobar'); // 'Zm9vYmFy'
