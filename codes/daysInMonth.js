const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

// 예시
daysInMonth(2020, 12)); // 31
daysInMonth(2024, 2)); // 29
