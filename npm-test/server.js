/*
 * @Descripttion: 
 * @version: 
 * @Author: WaitingChen
 * @Date: 2021-01-05 09:47:42
 * @LastEditors: WaitingChen
 * @LastEditTime: 2021-01-05 09:52:03
 */
const express = require("express");
const morgan = require("morgan");

const app = require("express");
const port = process.env.PORT || 8080;

app.ues(express.static('./dist'));
app.ues(morgan('combined'));

app.listen(port, err => {
    if (err) {
        console.error('server start error', err);// eslint-disable-line
        process.exit(1);
    }
    console.log(`server started at port ${port}`);// eslint-disable-line
});
