const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path')
app.listen(3000);

const storage = multer.diskStorage({
    destination: function (req, file, cb)
    {
        var folderName = "other"
        console.log(file)
        if (file.mimetype == "image/jpeg")
        {
            folderName = "images"
        }
        if (file.mimetype == "text/css")
        {
            folderName = "styles"
        }
        return cb(null, path.join('./uploads', folderName))
    },
    filename: function (req, file, cb)
    {
        return cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
})

// const upload = multer({ dest: `uploads/` });
const upload = multer({ storage: storage });
app.use(express.urlencoded({ extended: true }))
// app.use(upload);

app.get('/user', (req, res) =>
{
    res.sendFile("user.html", { root: "." });

})

app.post('/register', upload.single("profilePic"), (req, res) =>
{
    console.log(req.file);
    res.send("file uploaded")
})

// app.post('/register', upload.array("profilePic", 3), (req, res) =>
// {
//     console.log(req.body)
//     console.log(req.files);
//     res.send("file uploaded")
// })