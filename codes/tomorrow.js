const tomorrow = () => {
  let d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
};

// 예시
tomorrow(); // 2018-10-19 (if current date is 2018-10-18)
