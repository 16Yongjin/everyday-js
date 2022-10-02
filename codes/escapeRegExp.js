const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// 예시
escapeRegExp('(test)'); // \\(test\\)
