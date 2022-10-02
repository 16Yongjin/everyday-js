const requireUncached = module => {
  delete require.cache[require.resolve(module)];
  return require(module);
};

// 예시
const fs = requireUncached('fs'); // 'fs' will be loaded fresh every time
