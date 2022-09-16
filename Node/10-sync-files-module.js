const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

const name = "babui pakhi"

// {flag: 'a'} ---> append
writeFileSync(
    './content/new.txt',
    `\nThis file was created from the 9th code by ${name}`,
    { flag: 'a' }
)

console.log('done with this task')
console.log('starting the next one')

// start
// done with this task
// starting the next one