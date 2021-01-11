/*
 * @Descripttion: 
 * @version: 
 * @Author: WaitingChen
 * @Date: 2021-01-07 15:37:46
 * @LastEditors: WaitingChen
 * @LastEditTime: 2021-01-07 15:38:06
 */
var fs = require('fs');
var filepath = '../client/images/p02.png';

var bData = fs.readFileSync(filepath);
var base64Str = bData.toString('base64');
var datauri = 'data:image/png;base64,' + base64Str;

console.log(datauri);