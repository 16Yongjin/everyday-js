const insertBefore = (el, htmlString) =>
  el.insertAdjacentHTML('beforebegin', htmlString);

// 예시
insertBefore(document.getElementById('myId'), '<p>before</p>');
// <p>before</p> <div id="myId">...</div>
