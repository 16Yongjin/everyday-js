const toSafeInteger = num =>
  Math.round(
    Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );

// 예시
toSafeInteger('3.2'); // 3
toSafeInteger(Infinity); // 9007199254740991
