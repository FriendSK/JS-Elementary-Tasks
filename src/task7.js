jsElementaryTasks.task7 = function (event, context) {

    function getFiboByLength(context) {
        let len = transformIntData(context.length);
        let getNum = 0;
        let arr = [0, 1];
        let res = [];

        if (!validationDataForFiboByLength(len)) {

            for (let i = 2; getNum.toString().length < len + 1; i++) {

                arr.push(arr[i - 1] + arr[i - 2]);
                getNum = arr[i - 1];
                if (getNum.toString().length === len) {
                    res.push(getNum);
                }
            };
            return res;
        } else return `Status: ${obj.status}, reason: ${obj.reason}`;
    };

    function getFiboByRange(context) {

        let min = transformFloatData(context.min);
        let max = transformFloatData(context.max);
        let getNum = 0;
        let arr = [0, 1];
        let res = [];

        if (!validationDataForFiboByRange(+context.min, +context.max)) {

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

    function getAnswerChoise(event) {

        if (event.target.getAttribute('data') === '2')

            return getFiboByLength(context);

        else return getFiboByRange(context);
    };
    return getAnswerChoise(event);
};
