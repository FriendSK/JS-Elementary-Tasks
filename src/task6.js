jsElementaryTasks.task6 = function (row, min) {

    function getSequence(row, min) {

        let resultArr = [];
        let len = transformDataFloat(row);
        let square = transformDataFloat(min);
        let sqrt = +Math.sqrt(square).toFixed(0);

        if (!validationDataForSequence(len, sqrt)) {

            for (let i = sqrt; i < len + sqrt; i++) {
                resultArr.push(i);
            }
            return resultArr.join(',');

        } else return `Status: ${obj.status}, reason: ${obj.reason}`;
    };
    return getSequence(row, min);
};
