const expandTabs = (str, count) => str.replace(/\t/g, ' '.repeat(count));

// 예시
expandTabs('\t\tlorem', 3); // '      lorem'
