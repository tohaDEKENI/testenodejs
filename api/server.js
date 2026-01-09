const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

function auth(req, res, next) {
    console.log(`method: ${req.method}`);
    console.log(`url: ${req.url}`);
    next();
}

app.use(auth);

app.get("/", (req, res) => {
    res.json({ name: "DEKENI Toha" });
});

module.exports = app;