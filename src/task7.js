(function () {

    module.task7 = function () {

        let inputValue = prompt("Enter a  length of sequence").trim();
        let inputMinValue = prompt("Enter a  min value of sequence").trim();
        let inputMaxValue = prompt("Enter a  max value of sequence").trim();
        let context = {
            length: inputValue,
            min: inputMinValue,
            max: inputMaxValue
        };

        function transformData(data) {
            let value = +parseFloat(data).toFixed(0);
            return value;
        };

        function calcFiboByLength(value) {

            let len = transformData(value);
            let getNum = 0;
            let arr = [0, 1];
            let res = [];

            if (!validationData(len)) {

                for (let i = 2; getNum.toString().length < len + 1; i++) {

                    arr.push(arr[i - 1] + arr[i - 2]);
                    getNum = arr[i - 1];

                    if (getNum.toString().length === len) {
                        res.push(getNum);
                    }
                };
                return res;

            } else return validationData(value);
        };

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

        function validationData(value) {

            if (value && value > 0)
                return 0;

            else if (!value)
                return {
                    status: "failed",
                    reason: "you have entered a non reseric or zero value"
                }
            else
                return {
                    status: "failed",
                    reason: "you have entered a negative value"
                };
        };


        function validationData2(value1, value2) {

            if (value1 && value2 && value1 > 0 && value2 > 0) {
                return 0;
            } else {

                if (!(value1 && value2))
                    return {
                        status: "failed",
                        reason: "you have entered a non numeric or zero value"
                    }
                else
                    return {
                        status: "failed",
                        reason: "you have entered a negative value"
                    }
            };
        };
        console.log(calcFiboByLength(context.length));
        console.log(calcFiboByRange(context.min, context.max));
    };
}());
