const toRGBObject = rgbStr => {
  const [red, green, blue] = rgbStr.match(/\d+/g).map(Number);
  return { red, green, blue };
};

// 예시
toRGBObject('rgb(255, 12, 0)'); // {red: 255, green: 12, blue: 0}
