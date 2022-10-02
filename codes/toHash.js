const toHash = (object, key) =>
  Object.values(object).reduce((acc, data, index) => {
    acc[!key ? index : data[key]] = data;
    return acc;
  }, {});

// 예시
toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 3: 1 }
toHash([{ a: 'label' }], 'a'); // { label: { a: 'label' } }
