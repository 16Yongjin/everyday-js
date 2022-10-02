const validateNumber = n => {
  const num = parseFloat(n);
  return !Number.isNaN(num) && Number.isFinite(num) && Number(n) == n;
}

// 예시
validateNumber('10'); // true
validateNumber('a'); // false
