/*
 * @Descripttion: 
 * @version: 
 * @Author: WaitingChen
 * @Date: 2020-12-28 15:13:01
 * @LastEditors: WaitingChen
 * @LastEditTime: 2020-12-28 15:13:27
 */
class User {
    fullName: string
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + ' ' + lastName
    }
}

interface Person {
    firstName: string
    lastName: string
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = new User('Yee', 'Huang')

console.log(greeter(user))