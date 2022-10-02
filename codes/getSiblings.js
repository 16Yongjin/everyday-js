const getSiblings = el =>
  [...el.parentNode.childNodes].filter(node => node !== el);

// 예시
getSiblings(document.querySelector('head')); // ['body']
