const isISOString = val => {
  const d = new Date(val);
  return !Number.isNaN(d.valueOf()) && d.toISOString() === val;
};

// 예시
isISOString('2020-10-12T10:10:10.000Z'); // true
isISOString('2020-10-12'); // false
