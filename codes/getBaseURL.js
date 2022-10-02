const getBaseURL = url => url.replace(/[?#].*$/, '');

// 예시
getBaseURL('http://url.com/page?name=Adam&surname=Smith');
// 'http://url.com/page'
