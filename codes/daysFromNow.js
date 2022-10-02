const daysFromNow = n => {
  let d = new Date();
  d.setDate(d.getDate() + Math.abs(n));
  return d.toISOString().split('T')[0];
};

// 예시
daysFromNow(5); // 2020-10-13 (if current date is 2020-10-08)
