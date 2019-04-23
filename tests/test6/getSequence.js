function getSequence(row, min) {

    let resultArr = [];
    let len = transformFloatData(row);
    let square = transformFloatData(min);
    let sqrt = +Math.sqrt(square).toFixed(0);

    for (let i = sqrt; i < len + sqrt; i++) {
        resultArr.push(i);
    }
    return resultArr.join(',');
};