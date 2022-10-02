const atob = str => Buffer.from(str, 'base64').toString('binary');

// 예시
atob('Zm9vYmFy'); // 'foobar'
