const http = require('http');
const fs = require('fs');
// function requestHandler(req, res)
// {

// }
// const server = http.createServer(requestHandler);
const server = http.createServer((req, res) =>
{
    // console.log(req.url, req.method);
    // console.log(res);
    // res.write("Hello Class");
    // res.end("<h1>Hello Class</h1>") ;

    // res.statusCode = 201;
    // res.statusMessage="Data Received"
    res.writeHead(200, "Data Received", {
        "Content-Type": "text/html"
    })

    if (req.url == "/home")
    {
        // res.write('<h1>Home Page</h1>')
        // res.setHeader("Content-Type", "text/html")
        const home = fs.readFileSync('./home.html', 'utf-8');
        res.write(home);
    }

    if (req.url == '/about')
    {
        // res.write('<h1>About Page</h1>')
        // res.setHeader("Content-Type", "text/plain")
        res.write(fs.readFileSync('./about.html', 'utf-8'));
    }

    res.end();

})
server.listen(3000, () =>
{
    console.log("Server Started");
})