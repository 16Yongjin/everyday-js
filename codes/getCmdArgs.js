const getCmdArgs = () => process.argv.slice(2);

// 예시
// node my-script.js --name=John --age=30
getCmdArgs(); // ['--name=John', '--age=30']
