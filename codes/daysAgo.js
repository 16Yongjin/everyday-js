const daysAgo = n => {
  let d = new Date();
  d.setDate(d.getDate() - Math.abs(n));
  return d.toISOString().split('T')[0];
};

// 예시
daysAgo(20); // 2020-09-16 (if current date is 2020-10-06)
