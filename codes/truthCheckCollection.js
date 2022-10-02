const truthCheckCollection = (collection, pre) =>
  collection.every(obj => obj[pre]);

// 예시
truthCheckCollection(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
  ],
  'sex'
); // true
