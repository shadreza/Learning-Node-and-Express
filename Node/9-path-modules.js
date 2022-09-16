const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'sub-folder', 'test.txt')
console.log(filePath)

const baseName = path.basename(filePath)
console.log(baseName)

const absolutePath = path.resolve(__dirname, 'content', 'sub-folder', 'test.txt')
console.log(absolutePath)