const unwind = (key, obj) => {
  const { [key]: _, ...rest } = obj;
  return obj[key].map(val => ({ ...rest, [key]: val }));
};

// 예시
unwind('b', { a: true, b: [1, 2] }); // [{ a: true, b: 1 }, { a: true, b: 2 }]
