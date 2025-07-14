const express = require('express');
const app = express();
const fs = require('fs');
const user = require('./user');
const admin = require('./admin')
app.listen(3000);
// app.get('/product/:id/:name', (req, res) =>
// {
//     // console.log(req.params)
//     const { id, name } = req.params;
//     console.log(name);
//     const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))
//     const product = products.find(product => product.id.toString() == id)
//     res.json(product);

// })
// /product?id=5&name=xyz
// app.get('/product', (req, res) =>
// {
//     const { id, name } = req.query;
//     const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))
//     const product = products.find(product => product.id.toString() == id)
//     res.json(product);
// })

app.use("/user", user);
app.use("/admin", admin);

app.get("/user", (req, res) =>
{
    res.send("response from app.js")
})

