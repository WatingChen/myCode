var arr = [];

function getRandom(start, end) {

    let rank = end - start;

    return Math.floor(Math.random() * rank + start);

}

for(var i =0;i<10;i++) {
    arr.push(getRandom(10,100))
}

console.log(arr)