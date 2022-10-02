const xor = (a, b) => (( a || b ) && !( a && b ));

// 예시
xor(true, true); // false
xor(true, false); // true
xor(false, true); // true
xor(false, false); // false
