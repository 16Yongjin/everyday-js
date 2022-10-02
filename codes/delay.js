const delay = (fn, ms, ...args) => setTimeout(fn, ms, ...args);

// 예시
delay(
  function(text) {
    console.log(text);
  },
  1000,
  'later'
); // Logs 'later' after one second.
