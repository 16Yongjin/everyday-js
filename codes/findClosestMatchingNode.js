const findClosestMatchingNode = (node, selector) => {
  for (let n = node; n.parentNode; n = n.parentNode)
    if (n.matches && n.matches(selector)) return n;
  return null;
};

// 예시
findClosestMatchingNode(document.querySelector('span'), 'body'); // body
