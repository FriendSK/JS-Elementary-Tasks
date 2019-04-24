function getSquare (getArraysOfArr) {
    let getSquare = getArraysOfArr.map((item) => {

        let arr = [item[0]];
        let p = (item[1] + item[2] + item[3]) / 2;
        let s = Math.sqrt(p * (p - item[1]) * (p - item[2]) * (p - item[3])).toFixed(2);
        arr.push(s);
        return arr;
    });
     return getSquare;
};