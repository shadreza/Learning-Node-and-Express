// importing the http module
const http = require('http')

// the callback function will be passed 2 parameters, one is the request from the client and the second one is the response from the server
const server = http.createServer((req, res) => {

    // console.log(req.url);

    if (req.url === '/') {      
        res.end("Welcome to our homepage")
    } else if (req.url === '/about') {      
        res.end("Welcome to our about")
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
        `)
    }
})

// for the server this will be listening to the port 5000
server.listen(5000)