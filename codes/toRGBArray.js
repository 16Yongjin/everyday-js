const toRGBArray = rgbStr => rgbStr.match(/\d+/g).map(Number);

// 예시
toRGBArray('rgb(255, 12, 0)'); // [255, 12, 0]
