(function () {

    module.task5 = function () {

        var inputValue1 = prompt("Enter a  min six-digit value of tickets").trim();
        var inputValue2 = prompt("Enter a  max six-digit value of tickets").trim();

        var context = {
            min: inputValue1,
            max: inputValue2
        };

        var value1 = context.min;
        var value2 = context.max;

        function processingTickets(min, max) {

            if (validationData(min, max)) {
                let softMethodCount = 0;
                let complicatedMethodCount = 0;
                var obj = {};

                for (var i = min; i <= max; i++) {
                    var arrData = dataToArray(i);

                    softMethodCount += calcSoftMethod(arrData);
                    complicatedMethodCount += calcComplicatedMethod(arrData);
                }

                if (softMethodCount > complicatedMethodCount) {

                    return obg = {
                        method: 'Soft method has won!',
                        softMethod: softMethodCount,
                        complicatedMethod: complicatedMethodCount,
                    };
                } else if (softMethodCount < complicatedMethodCount) {

                    return obg = {
                        method: 'Complicated method has won!',
                        softMethod: softMethodCount,
                        complicatedMethod: complicatedMethodCount,
                    };
                } else {
                    console.log('None of the methods have won!');
                };
            } else return;
        };

        function dataToArray(value) {
            var arr = [];
            arr.length = 6;
            var str = value.toString();

            for (var i = 0; i < str.length; i++) {
                arr[arr.length - i - 1] = str[str.length - i - 1]

            };
            return arr;
        };

        function calcSoftMethod(value) {

            var counter = 0;
            var leftSum = 0;
            var rightSum = 0;

            for (var i = 0; i < value.length / 2; i++) {
                leftSum += +(value[i]);
                rightSum += +(value[i + (value.length / 2)]);
            }

            counter = leftSum === rightSum ? 1 : 0;
            return counter;
        };

        function calcComplicatedMethod(value) {

            var counter = 0;
            var evenValue = 0;
            var oddValue = 0;

            for (var i = 0; i < value.length; i++) {

                value[i] % 2 ? oddValue += +value[i] : evenValue += +value[i]
            };
            counter = oddValue === evenValue ? 1 : 0;
            return counter;
        };

        function validationData(min, max) {

            var reg = /^\d{6}$/;

            if (reg.test(min) && reg.test(max)) {
                return true;
            } else {
                console.log('{status: "failed", reason: "you have entered incorrect data"}');
                return false;
            };

        }
        var res = processingTickets(value1, value2);
        console.log(res);
    };
}());
