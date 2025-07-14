const express = require('express');
const router = express();
router.get('/login', (req, res) =>
{
    res.send("Admin Login Page");
})

router.get("/dashboard", (req, res) =>
{
    res.send("Admin Dashboard");
})

module.exports = router;