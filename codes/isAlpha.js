const isAlpha = str => /^[a-zA-Z]*$/.test(str);

// 예시
isAlpha('sampleInput'); // true
isAlpha('this Will fail'); // false
isAlpha('123'); // false
