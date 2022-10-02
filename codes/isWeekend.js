const isWeekend = (d = new Date()) => d.getDay() % 6 === 0;

// 예시
isWeekend(); // 2018-10-19 (if current date is 2018-10-18)
