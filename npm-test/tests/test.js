/*
 * @Descripttion: 
 * @version: 
 * @Author: WaitingChen
 * @Date: 2021-01-04 10:29:32
 * @LastEditors: WaitingChen
 * @LastEditTime: 2021-01-04 10:29:33
 */
var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});