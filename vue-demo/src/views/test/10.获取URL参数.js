let url = "http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e";

function serilizeUrl(url) {
    let resultObj = {};
    url = url.split('?')[1];
    let map = url.split("&");
    for (let i = 0, len = map.length; i < len; i++) {
        resultObj[map[i].split("=")[0]] = map[i].split("=")[1];
    }
    return resultObj
}

console.log(serilizeUrl(url))