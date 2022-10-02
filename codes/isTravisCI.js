const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;

// 예시
isTravisCI(); // true (if code is running on Travis CI)
