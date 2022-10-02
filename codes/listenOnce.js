const listenOnce = (el, evt, fn) =>
  el.addEventListener(evt, fn, { once: true });

// 예시
listenOnce(
  document.getElementById('my-id'),
  'click',
  () => console.log('Hello world')
); // 'Hello world' will only be logged on the first click
