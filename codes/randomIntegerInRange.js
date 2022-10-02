const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// 예시
randomIntegerInRange(0, 5); // 2
