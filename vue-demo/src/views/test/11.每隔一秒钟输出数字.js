

// let t = null;
// let num = 1;
// clearInterval(t);
// t = setInterval(() => {
//     console.log(num++)
// }, 1000);

for (var i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j + 1)
        }, j * 1000)
    })(i)
}
