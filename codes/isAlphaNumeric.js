const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);

// 예시
isAlphaNumeric('hello123'); // true
isAlphaNumeric('123'); // true
isAlphaNumeric('hello 123'); // false (space character is not alphanumeric)
isAlphaNumeric('#$hello'); // false
