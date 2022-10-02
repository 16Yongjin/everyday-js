const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);

// 예시
const regExp = /lorem ipsum/gi;
const regExp2 = cloneRegExp(regExp); // regExp !== regExp2
