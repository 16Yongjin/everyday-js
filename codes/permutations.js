const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};

// 예시
permutations([1, 33, 5]);
// [ [1, 33, 5], [1, 5, 33], [33, 1, 5], [33, 5, 1], [5, 1, 33], [5, 33, 1] ]
