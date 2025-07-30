const express = require('express');
const fs = require('fs');
const path = require('path')
const multer = require('multer');
const app = express();
app.listen(3000, (err) =>
{
    if (err) return new Error("Unable to start the server: " + err.message);

    console.log("Server started at - http://localhost:3000/");
})

const storage = multer.diskStorage({
    filename: function (req, file, cb)
    {
        return cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    },
    destination: function (req, file, cb)
    {
        var folderName = "others";
        if (req.url == "/registration")
        {
            folderName = "profilepic"
        }
        return cb(null, path.join(__dirname, "assets", folderName));
    }
})
const update = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }))

app.get("/registration", (req, res) =>
{
    res.sendFile('/registration.html', { root: "./UI/user" });
})

app.get("/login", (req, res) =>
{
    res.sendFile('/login.html', { root: "./UI/" });
})

app.post('/registration', update.single("profilePic"), (req, res) =>
{
    const userData = req.body;
    console.log(req.file)
    userData["profilePic"] = `${req.file.filename}`;
    const filePath = path.join(__dirname, "data", "users.json")
    var users = [];
    if (fs.existsSync(filePath))
    {
        const userFileData = fs.readFileSync(filePath, "utf-8");
        if (userFileData.length > 0)
        {
            users = JSON.parse(userFileData);
        }
    }

    users.push(userData);
    fs.writeFileSync(filePath, JSON.stringify(users));

    res.redirect("/login")
})

app.post('/login', (req, res) =>
{
    const userData = req.body;
    var users = [];
    const filePath = path.join(__dirname, "data", "users.json")
    if (fs.existsSync(filePath))
    {
        const userFileData = fs.readFileSync(filePath, "utf-8");
        if (userFileData.length > 0)
        {
            users = JSON.parse(userFileData);
        }
    }
    else
    {
        return res.send("No User exists")
    }
    const user = users.find(user => user.username == userData.userName);
    if (!user)
    {
        return res.send("Invalid username");
    }

    if (user.password == userData.password)
    {
        return res.redirect('/user/dashboard')
    }

    return res.send("Invalid password")
})

app.get('/user/dashboard', (req, res) =>
{
    res.sendFile("dashboard.html", { root: "./UI/user" })
})