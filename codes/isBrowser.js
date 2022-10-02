const isBrowser = () => ![typeof window, typeof document].includes('undefined');

// 예시
isBrowser(); // true (browser)
isBrowser(); // false (Node)
