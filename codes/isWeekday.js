const isWeekday = (d = new Date()) => d.getDay() % 6 !== 0;

// 예시
isWeekday(); // true (if current date is 2019-07-19)
