const off = (el, evt, fn, opts = false) =>
  el.removeEventListener(evt, fn, opts);

// 예시
const fn = () => console.log('!');
document.body.addEventListener('click', fn);
off(document.body, 'click', fn); // no longer logs '!' upon clicking on the page
