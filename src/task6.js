(function () {

    module.task6 = function () {

        var value1 = prompt("Enter a square length");
        var value2 = prompt("Enter a min value of square");
        var resultArr = [];
        var rowLength = +parseFloat(value1).toFixed(0);
        var minSquare = +parseFloat(value2).toFixed(0);
        var sqrt = +Math.sqrt(minSquare).toFixed(0);

        function calcSequence(len, sqrt) {

            if (validationData(len, sqrt)) {

                for (var i = sqrt; i < len + sqrt; i++) {
                    resultArr.push(i);
                }
                return resultArr.join(',');
                
            } else return;
        };

        function validationData(value1, value2) {
           if ((value1 && value2) && (value1 > 0 && value2 > 0)) {
                return true;
           } else {
                console.log('{status: "failed", reason: "you have entered incorrect data"}');
                return false;
           };
        };

        console.log(calcSequence(rowLength, sqrt));
    };
}());
