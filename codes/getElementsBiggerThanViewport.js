const getElementsBiggerThanViewport = () => {
  const docWidth = document.documentElement.offsetWidth;
  return [...document.querySelectorAll('*')].filter(
    el => el.offsetWidth > docWidth
  );
};

// 예시
getElementsBiggerThanViewport(); // <div id="ultra-wide-item" />
