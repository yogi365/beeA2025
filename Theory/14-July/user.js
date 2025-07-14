const express = require('express');
const router = express();
router.get('/', (req, res) =>
{
    res.send("/ route from user router")
})

router.get('/login', (req, res) =>
{
    res.send("User Login Page");
})

router.get("/dashboard", (req, res) =>
{
    res.send("User Dashboard");
})

module.exports = router;