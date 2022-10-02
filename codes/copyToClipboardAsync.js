const copyToClipboardAsync = str => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject('The Clipboard API is not available.');
};

// 예시
copyToClipboardAsync('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.
