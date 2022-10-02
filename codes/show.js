const show = (...el) => [...el].forEach(e => (e.style.display = ''));

// 예시
show(...document.querySelectorAll('img'));
// Shows all <img> elements on the page
