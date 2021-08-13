const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'new', 'new.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'new', 'new.txt')
console.log(absolute)