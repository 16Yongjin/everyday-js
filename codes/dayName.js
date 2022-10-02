const dayName = (date, locale) =>
  date.toLocaleDateString(locale, { weekday: 'long' });

// 예시
dayName(new Date()); // 'Saturday'
dayName(new Date('09/23/2020'), 'de-DE'); // 'Samstag'
