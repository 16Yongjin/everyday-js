const functionName = fn => (console.debug(fn.name), fn);

// 예시
let m = functionName(Math.max)(5, 6);
// max (logged in debug channel of console)
// m = 6
