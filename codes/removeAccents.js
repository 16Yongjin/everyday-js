const removeAccents = str =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// 예시
removeAccents('Antoine de Saint-Exupéry'); // 'Antoine de Saint-Exupery'
