(function () {

    module.task6 = function () {

        var value1 = prompt("Enter a row length");
        var value2 = prompt("Enter a min value of square");
        var arr = [];
        var resultArr = [];
        var rowLength = parseFloat(value1).toFixed(0);
        var minSquare = parseFloat(value2).toFixed(0);

        function getRandom(n, m) {

            if (validationData(n, m)) {

                for (var i = 0; i < n; i++) {
                    arr.push((Math.random() * 10).toFixed(0));
                };
            } else {
                console.log('{status: "failed", reason: "you have entered incorrect data"}');
            };
        };


        function compareNumbers(arr, min) {

            for (var i = 0; i < arr.length; i++) {
                if ((arr[i] * arr[i]) > min) {
                    resultArr.push(arr[i]);
                };
            };
        };

        function validationData(rowLength, minSquare) {

            if ((rowLength && minSquare) && (rowLength > 0 && minSquare > 0)) {

                return true;
            };
            return false;
        };

        getRandom(rowLength, minSquare);
        compareNumbers(arr, minSquare);

        var result = resultArr.join(',');

        console.log(result);
    };
}());
