const isSameDate = (dateA, dateB) =>
  dateA.toISOString() === dateB.toISOString();

// 예시
isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
