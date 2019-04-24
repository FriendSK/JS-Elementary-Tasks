function getSequence(row, min) {

    let resultArr = [];
    let len = +row;
    let square = +min;
    let sqrt = +Math.sqrt(square).toFixed(0);

    for (let i = sqrt; i < len + sqrt; i++) {
        resultArr.push(i);
    }
    return resultArr.join(',');
};