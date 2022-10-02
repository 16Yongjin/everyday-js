const coalesce = (...args) => args.find(v => ![undefined, null].includes(v));

// 예시
coalesce(null, undefined, '', NaN, 'Waldo'); // ''
