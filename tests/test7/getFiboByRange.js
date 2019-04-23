function getFiboByRange(value1, value2) {

    let min = transformFloatData(value1);
    let max = transformFloatData(value2);
    let getNum = 0;
    let arr = [0, 1];
    let res = [];

    if (!validationDataForFibo2(value1, value2)) {

        for (let i = 2; getNum < max; i++) {

            arr.push(arr[i - 1] + arr[i - 2]);
            getNum = arr[i - 1];
            if (getNum >= min && getNum <= max) {
                res.push(getNum);
            }
        };
        return res;
    } else return `Status: ${obj.status}, reason: ${obj.reason}`;
};