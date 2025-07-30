const express = require('express');
const app = express();
const multer = require("multer");
const path = require('path');
app.listen(3000);
const storage = multer.diskStorage({
    destination: function (req, file, cb)
    {
        return cb(null, "./upload/")
    },
    filename: function (req, file, cb)
    {
        return cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }

})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb)
    {
        console.log(file.mimetype.startsWith)
        if (file.mimetype.startsWith("image/"))
        {
            return cb(null, true)
        }
        cb(new Error("Only image files are required"), false);
    },
    limits: {
        fileSize: 1 * 1024 * 1024
    }
})

app.get("/user", (req, res) =>
{
    res.sendFile('user.html', { root: "." })
})

app.post('/register', upload.single("profilePic"), (req, res) =>
{
    res.send("File uploaded")
})