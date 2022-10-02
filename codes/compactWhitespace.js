const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');

// 예시
compactWhitespace('Lorem    Ipsum'); // 'Lorem Ipsum'
compactWhitespace('Lorem \n Ipsum'); // 'Lorem Ipsum'
