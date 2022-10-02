const toHSLArray = hslStr => hslStr.match(/\d+/g).map(Number);

// 예시
toHSLArray('hsl(50, 10%, 10%)'); // [50, 10, 10]
