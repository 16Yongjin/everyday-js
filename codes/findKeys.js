const findKeys = (obj, val) =>
  Object.keys(obj).filter(key => obj[key] === val);

// 예시
const ages = {
  Leo: 20,
  Zoey: 21,
  Jane: 20,
};
findKeys(ages, 20); // [ 'Leo', 'Jane' ]
