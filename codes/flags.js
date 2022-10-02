const flags = arr => arr.reduce((acc, str) => ({...acc, [str]: true }), {});

// 예시
flags(['red', 'green']); // { red: true, green: true }
