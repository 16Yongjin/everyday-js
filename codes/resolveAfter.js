const resolveAfter = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => resolve(value, delay));
  });

// 예시
resolveAfter('Hello', 1000);
// Returns a promise that resolves to 'Hello' after 1s
