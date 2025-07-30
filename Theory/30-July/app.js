const express = require('express');
const session = require('express-session');
const app = express();
app.listen(3000, () =>
{
    console.log('Server started at port 3000');
})
app.use(express.urlencoded({ extended: true }))
const users = [
    { username: "alice", password: "password123", role: "admin" },
    { username: "bob", password: "qwerty", role: 'user' },
    { username: "charlie", password: "letmein", role: 'user' }
];

app.use(session({
    secret: "keyboard",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60,
        httpOnly: true
    }
}))

const isAuthenticate = (req, res, next) =>
{
    if (req.session.user)
    {
        next();
    }
    else
    {
        res.redirect('/login');
    }
}

const isAuthorised = (req, res, next) =>
{
    if (req.session.user && req.session.user.role == 'admin')
    {
        next();
    }
    else
    {
        res.send('You are not authorised to access this resource')
    }
}

app.get('/', (req, res) =>
{
    res.sendFile('index.html', { root: './ui' })
})


app.get('/login', (req, res) =>
{
    res.sendFile('login.html', { root: './ui' })
})
app.post('/login', (req, res) =>
{
    const userObject = req.body;
    const user = users.find(user => user.username == userObject.username);
    if (!user)
    {
        return res.send('User not found')
    }

    if (user.password != userObject.password)
    {
        return res.send('invalid password')
    }

    req.session.user = user;
    if (user.role == 'admin')
    {
        return res.redirect('/admin/dashboard');
    }

    res.redirect('/user/dashboard');
})

// app.get('/user/dashboard', isAuthenticate, (req, res) =>
// {
//     res.sendFile('dashboard.html', { root: './ui/user' })
// })

// app.get('/admin/dashboard', isAuthenticate, isAuthorised, (req, res) =>
// {
//     res.sendFile('dashboard.html', { root: './ui/admin' })
// })

app.use('/admin', isAuthenticate, isAuthorised, 'AdminRouteModule')