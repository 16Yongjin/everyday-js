const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);

// 예시
redirect('https://google.com');
