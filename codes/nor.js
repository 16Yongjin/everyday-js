const nor = (a, b) => !(a||b);

// 예시
nor(true, true); // false
nor(true, false); // false
nor(false, false); // true
