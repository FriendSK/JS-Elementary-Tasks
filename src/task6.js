(function () {

    module.task6 = function () {

        let value1 = prompt("Enter a row length").trim();
        let value2 = prompt("Enter a min value of square").trim();

        function transformData(data) {
            let value = +parseFloat(data).toFixed(0);
            return value;
        };

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

        function validationData(value1, value2) {

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
        console.log(calcSequence(value1, value2));
    };
}());
