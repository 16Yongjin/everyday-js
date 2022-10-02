const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

// 예시
mapNumRange(5, 0, 10, 0, 100); // 50
