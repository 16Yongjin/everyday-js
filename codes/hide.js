const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

// 예시
hide(...document.querySelectorAll('img')); // Hides all <img> elements on the page
