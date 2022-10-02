const getAncestors = el => {
  let ancestors = [];
  while (el) {
    ancestors.unshift(el);
    el = el.parentNode;
  }
  return ancestors;
};

// 예시
getAncestors(document.querySelector('nav'));
// [document, html, body, header, nav]
