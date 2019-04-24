function getFiboByLength(context) {
    let len = +context;
    let getNum = 0;
    let arr = [0, 1];
    let res = [];

    for (let i = 2; getNum.toString().length < len + 1; i++) {

        arr.push(arr[i - 1] + arr[i - 2]);
        getNum = arr[i - 1];
        if (getNum.toString().length === len) {
            res.push(getNum);
        }
    };
    return res;
};