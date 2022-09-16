const { readFile, writeFile } = require('fs')
console.log('start');
readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(`there is an error, ${err}`)
        return;
    }
    const first = res
    console.log(res)
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(`there is an error, ${err}`)
            return;
        }
        const second = res
        console.log(res)
        writeFile(
            './content/result-async.txt',
            `Here is a result : ${first}, ${second}`,
            (err, res) => {
                if (err) {
                    console.log(`there is an error, ${err}`)
                    return;
                }
                const third = res
                console.log(res)
                console.log('done with this task')
            }
        )
    })
})


console.log('starting the next one')


// start
// starting the next one
// this is in first txt
// this is in second txt
// done with this task



// sync -> line by line

// async -> never gets blocked by a task