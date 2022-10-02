const addStyles = (el, styles) => Object.assign(el.style, styles);

// 예시
addStyles(document.getElementById('my-element'), {
  background: 'red',
  color: '#ffff00',
  fontSize: '3rem'
});
