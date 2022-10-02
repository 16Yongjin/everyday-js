const countSubstrings = (str, searchValue) => {
  let count = 0,
    i = 0;
  while (true) {
    const r = str.indexOf(searchValue, i);
    if (r !== -1) [count, i] = [count + 1, r + 1];
    else return count;
  }
};

// 예시
countSubstrings('tiktok tok tok tik tok tik', 'tik'); // 3
countSubstrings('tutut tut tut', 'tut'); // 4
