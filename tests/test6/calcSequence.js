function calcSequence(rowLength, minSquare) {

    let resultArr = [];
    let len = transformData(rowLength);
    let square = transformData(minSquare);
    let sqrt = +Math.sqrt(square).toFixed(0);

    if (!validationData(len, sqrt)) {

        for (let i = sqrt; i < len + sqrt; i++) {
            resultArr.push(i);
        }
        return resultArr.join(',');

    } else return validationData(len, sqrt);
};