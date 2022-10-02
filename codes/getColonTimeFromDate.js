const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

// 예시
getColonTimeFromDate(new Date()); // '08:38:00'
