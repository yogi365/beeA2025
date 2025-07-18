const express = require('express')
const cors = require('cors')
const app = express();
app.listen(3000, (err) =>
{
    console.log('Server Started at port http://localhost:3000');
})

app.use(express.static("./public"))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// app.use((req, res, next) =>
// {
//     console.log("First MiddleWare");
//     // res.send("First Middleware")
//     next();
// })
// app.use((req, res, next) =>
// {
//     console.log("Second MiddleWare");
//     next();
// })

// app.get("/", (req, res, next) =>
// {
//     res.send("Sending data");
//     next()
// })
// app.use((req, res, next) =>
// {
//     console.log("Third MiddleWare");

// })
app.get('/', (req, res) =>
{
    res.sendFile('/dashboard.html', { root: "./ui" })
})

// app.get("/public/style.css", (req, res) =>
// {
//     res.sendFile('/style.css', { root: "./public" })
// })
// app.get("/public/image1.jpg", (req, res) =>
// {
//     res.sendFile("/image1.jpg", { root: "./public" })
// })

app.post("/login", (req, res) =>
{
    const bodyObject = req.body;
    res.send(bodyObject);
})

const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
    { id: 4, name: "David", email: "david@example.com" },
    { id: 5, name: "Eve", email: "eve@example.com" },
    { id: 6, name: "Frank", email: "frank@example.com" },
    { id: 7, name: "Grace", email: "grace@example.com" },
    { id: 8, name: "Heidi", email: "heidi@example.com" },
    { id: 9, name: "Ivan", email: "ivan@example.com" },
    { id: 10, name: "Judy", email: "judy@example.com" }
];

app.get('/user', (req, res) =>
{
    res.json(users)
})