const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

// 예시
isAbsoluteURL('https://google.com'); // true
isAbsoluteURL('ftp://www.myserver.net'); // true
isAbsoluteURL('/foo/bar'); // false
