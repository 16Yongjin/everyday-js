const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;

// 예시
isLeapYear(2019); // false
isLeapYear(2020); // true
