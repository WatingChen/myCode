/*
 * @Descripttion: 
 * @version: 
 * @Author: WaitingChen
 * @Date: 2021-01-07 15:56:09
 * @LastEditors: WaitingChen
 * @LastEditTime: 2021-01-07 15:58:29
 */
var express = require('express');
var app = express();
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(morgan('short', {stream: accessLogStream}));
app.use(function(req, res, next){
    res.send('ok');
});

app.listen(3000);