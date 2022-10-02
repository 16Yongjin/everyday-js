const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');

// 예시
removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'
