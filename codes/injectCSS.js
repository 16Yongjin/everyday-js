const injectCSS = css => {
  let el = document.createElement('style');
  el.type = 'text/css';
  el.innerText = css;
  document.head.appendChild(el);
  return el;
};

// 예시
injectCSS('body { background-color: #000 }');
// '<style type="text/css">body { background-color: #000 }</style>'
