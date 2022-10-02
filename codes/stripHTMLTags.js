const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

// 예시
stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
