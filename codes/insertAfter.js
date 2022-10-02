const insertAfter = (el, htmlString) =>
  el.insertAdjacentHTML('afterend', htmlString);

// 예시
insertAfter(document.getElementById('myId'), '<p>after</p>');
// <div id="myId">...</div> <p>after</p>
