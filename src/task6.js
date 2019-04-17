(function () {

    module.task6 = function () {

        var value1 = prompt("Enter a row length").trim();
        var value2 = prompt("Enter a min value of square").trim();
        var resultArr = [];
        var rowLength = +parseFloat(value1).toFixed(0);
        var minSquare = +parseFloat(value2).toFixed(0);

        function calcSequence(len, minSquare) {

            var sqrt = +Math.sqrt(minSquare).toFixed(0);

            if (!validationData(len, sqrt)) {

                for (var i = sqrt; i < len + sqrt; i++) {
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
                else (value1 >= 0 && value2 >= 0)
                return {
                    status: "failed",
                    reason: "you have entered a negative value"
                }
            };
        };
        console.log(calcSequence(rowLength, minSquare));
    };
}());
