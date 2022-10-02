const toggleClass = (el, className) => el.classList.toggle(className);

// 예시
toggleClass(document.querySelector('p.special'), 'special');
// The paragraph will not have the 'special' class anymore
