const byteSize = str => new Blob([str]).size;

// 예시
byteSize('😀'); // 4
byteSize('Hello World'); // 11
