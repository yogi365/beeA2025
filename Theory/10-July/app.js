const express = require('express');
const app = express();
// const fs = require('fs');
const path = require('path');

app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) =>
{
    // const user = {
    //     userName: "Abc",
    //     age: 20
    // }
    // res.json(user)
    res.send('Home Page');
})

app.get('/about', (req, res) =>
{
    // const aboutPage = fs.readFileSync('./about.html', 'utf-8')
    // res.send(aboutPage);
    // console.log(__dirname);
    // console.log(__filename)    
    // res.sendFile('G:/CQ/BE 2024/BEE/A/Theory/10-July/about.html');
    // const filePath = path.join(__dirname, "about.html");
    // console.log(filePath)
    // res.sendFile(filePath)
    res.sendFile('/about.html', { root: '.' });
})

app.get('/login', (req, res) =>
{
    res.sendFile('/userregistration.html', { root: '.' });
})

app.post('/login', (req, res) =>
{
    const userObject = req.body;
    console.log(userObject);
    res.send(userObject);
})

app.listen(3000, (err) =>
{
    if (err) console.log(err)
    else console.log("Server started at", "http://localhost:3000")
})