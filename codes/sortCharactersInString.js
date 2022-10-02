const sortCharactersInString = str =>
  [...str].sort((a, b) => a.localeCompare(b)).join('');

// 예시
sortCharactersInString('cabbage'); // 'aabbceg'
