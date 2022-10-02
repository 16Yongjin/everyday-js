const findClosestAnchor = node => {
  for (let n = node; n.parentNode; n = n.parentNode)
    if (n.nodeName.toLowerCase() === 'a') return n;
  return null;
};

// 예시
findClosestAnchor(document.querySelector('a > span')); // a
