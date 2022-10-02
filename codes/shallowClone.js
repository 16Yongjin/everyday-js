const shallowClone = obj => Object.assign({}, obj);

// 예시
const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
