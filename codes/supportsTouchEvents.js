const supportsTouchEvents = () =>
  window && 'ontouchstart' in window;

// 예시
supportsTouchEvents(); // true
