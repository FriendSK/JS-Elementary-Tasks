function calcFiboByRange(value1, value2) {

    let min = transformData(value1);
    let max = transformData(value2);
    let getNum = 0;
    let arr = [0, 1];
    let res = [];

    if (!validationData2(value1, value2)) {

        for (let i = 2; getNum < max; i++) {

            arr.push(arr[i - 1] + arr[i - 2]);
            getNum = arr[i - 1];

            if (getNum >= min && getNum <= max) {
                res.push(getNum);
            }
        };
        return res;

    } else return validationData(value);
};