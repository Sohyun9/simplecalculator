var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("URL 계산기 서비스 <br> 덧셈 : /add , 뺄셈 : /minus, 곱셈 : /multi, 나눗셈 : /div");
});

app.get("/add", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = (Number)(p1) + (Number)(p2);

    res.send("덧셈" + "<br>" + "Param1 : " + p1 + " / Param2 : " + p2 + "<br>" +"Result : " + result);
});

app.get("/minus", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = (Number)(p1) - (Number)(p2);

    res.send("뺄셈" + "<br>" + "Param1 : " + p1 + " / Param2 : " + p2 + "<br>" +"Result : " + result);
});

app.get("/multi", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = (Number)(p1) * (Number)(p2);

    res.send("곱셈" + "<br>" + "Param1 : " + p1 + " / Param2 : " + p2 + "<br>" +"Result : " + result);
});

app.get("/div", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = (Number)(p1) / (Number)(p2);

    if(0 == (Number)(p2)) {
        res.send("0으로 수를 나눌 수 없습니다.")
    }

    res.send("나눗셈" + "<br>" + "Param1 : " + p1 + " / Param2 : " + p2 + "<br>" +"Result : " + result);
});

app.listen(8888);