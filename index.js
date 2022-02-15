var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("Hello Calc");
});

app.get("/add", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = (Number)(p1) + (Number)(p2);

    // res.send("Param1 : " + p1 + " / Param2 : " + p2);
    res.send("Result : " + result);
});

app.get("/minus", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = (Number)(p1) - (Number)(p2);

    // res.send("Param1 : " + p1 + " / Param2 : " + p2);
    res.send("Result : " + result);
});

app.get("/multi", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = (Number)(p1) * (Number)(p2);

    // res.send("Param1 : " + p1 + " / Param2 : " + p2);
    res.send("Result : " + result);
});

app.get("/div", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = (Number)(p1) / (Number)(p2);

    // res.send("Param1 : " + p1 + " / Param2 : " + p2);
    res.send("Result : " + result);
});

app.listen(8888);