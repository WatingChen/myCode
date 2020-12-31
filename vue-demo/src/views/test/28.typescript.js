/*
 * @Descripttion:
 * @version:
 * @Author: WaitingChen
 * @Date: 2020-12-28 15:13:01
 * @LastEditors: WaitingChen
 * @LastEditTime: 2020-12-28 15:13:27
 */
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = new User('Yee', 'Huang');
console.log(greeter(user));
