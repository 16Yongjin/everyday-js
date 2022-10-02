const queryStringToObject = url =>
  [...new URLSearchParams(url.split('?')[1])].reduce(
    (a, [k, v]) => ((a[k] = v), a),
    {}
  );

// 예시
queryStringToObject('https://google.com?page=1&count=10');
// {page: '1', count: '10'}
