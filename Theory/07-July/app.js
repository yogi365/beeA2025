const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
http.createServer((req, res) =>
{
    res.setHeader('Content-Type', 'text/html');
    if (req.url == "/" || req.url == "/home")
    {
        const home = fs.readFileSync('./home.html', 'utf-8')
        res.write(home);
        res.end();
        return;
    }

    if (req.url == '/userregistration' && req.method == "GET")
    {
        const user = fs.readFileSync('./userregistration.html', 'utf-8')
        res.write(user);
        res.end();
        return;
    }
    if (req.url == '/userregistration' && req.method == "POST")
    {
        // console.log(req.headers);
        var body = '';
        req.on('data', (chunk) =>
        {
            // console.log(chunk.toString());
            body += chunk.toString();
        })

        req.on('end', (err) =>
        {
            const bodyObject = queryString.parse(body)
            console.log(bodyObject);
        })
        res.end();
    }

}).listen(3000, () =>
{
    console.log("Server started at 3000")
})