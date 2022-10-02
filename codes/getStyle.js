const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

// 예시
getStyle(document.querySelector('p'), 'font-size'); // '16px'
