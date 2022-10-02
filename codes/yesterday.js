const yesterday = () => {
  let d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
};

// 예시
yesterday(); // 2018-10-17 (if current date is 2018-10-18)
