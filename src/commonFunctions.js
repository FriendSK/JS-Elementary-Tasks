function transformFloatData(data) {
    let value = +parseFloat(data).toFixed(0);
    return value;
};

function transformIntData(data) {
    let value = +parseInt(data);
    return value;
};

function isTriangle(a, b, c) {
    return ((a + b) > c &&
        (b + c) > a &&
        (a + c) > b);
};

function getSquareOfTriangle(data) {

    let resultArr = data.map((item) => {
        let arr = [item[0]];
        let p = (item[1] + item[2] + item[3]) / 2;
        let s = Math.sqrt(p * (p - item[1]) * (p - item[2]) * (p - item[3])).toFixed(2);
        arr.push(s);
        return arr;
    });
    return resultArr;
};