const compactJoin = (arr, delim = ',') => arr.filter(Boolean).join(delim);

// 예시
compactJoin(['a', '', 'b', 'c']); // 'a,b,c'
