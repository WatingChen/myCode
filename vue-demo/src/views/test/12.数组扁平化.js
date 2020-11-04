// let arrArr = [[1, 2, 3], [[4, 5, [6, [7, 8]]]]];

// function flatten(arr) {
//     return arr.reduce(function (prev, item) {
//         // console.log(prev)
//         // console.log(item)
//         return prev.concat(Array.isArray(item) ? flatten(item) : item);
//     }, [])
// }

// // function flatten(arr) {
// //     return arr.reduce(function (prev, item) {
// //         return prev.concat(Array.isArray(item) ? flatten(item) : item);
// //     }, []);
// // }

// console.log(flatten(arrArr))

var result = [
    {
        subject: 'math',
        score: 10
    },
    {
        subject: 'chinese',
        score: 20
    },
    {
        subject: 'english',
        score: 30
    }
];

var sum = result.reduce(function (prev, cur) {
    console.log(prev);
    return cur.score + prev;
    // return cur.subject + prev
}, 0);
console.log(sum) //60
