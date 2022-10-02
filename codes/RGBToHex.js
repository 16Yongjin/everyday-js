const RGBToHex = (r, g, b) =>
  ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

// 예시
RGBToHex(255, 165, 1); // 'ffa501'
