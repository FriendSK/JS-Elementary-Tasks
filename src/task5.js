(function () {

    module.task5 = function () {

        let inputValue1 = prompt("Enter a  min six-digit value of tickets").trim();
        let inputValue2 = prompt("Enter a  max six-digit value of tickets").trim();

        let context = {
            min: inputValue1,
            max: inputValue2
        };

        function processingTickets(min, max) {

            if (!validationData(min, max)) {
                let softMethodCount = 0;
                let complicatedMethodCount = 0;

                for (let i = min; i <= max; i++) {
                    let arrData = dataToArray(i);

                    softMethodCount += calcSoftMethod(arrData);
                    complicatedMethodCount += calcComplicatedMethod(arrData);
                }

                if (softMethodCount > complicatedMethodCount) {

                    return {
                        method: 'Soft method has won!',
                        softMethod: softMethodCount,
                        complicatedMethod: complicatedMethodCount,
                    };
                } else if (softMethodCount < complicatedMethodCount) {

                    return {
                        method: 'Complicated method has won!',
                        softMethod: softMethodCount,
                        complicatedMethod: complicatedMethodCount,
                    };
                } else {
                    console.log('None of the methods have won!');
                };
            } else return validationData(min, max);
        };

        function dataToArray(value) {
            let arr = [];
            arr.length = 6;
            let str = value.toString();

            for (let i = 0; i < str.length; i++) {
                arr[i] = str[i]

            };
            return arr;
        };

        function calcSoftMethod(value) {

            let counter = 0;
            let leftSum = 0;
            let rightSum = 0;

            for (let i = 0; i < value.length / 2; i++) {
                leftSum += +(value[i]);
                rightSum += +(value[i + (value.length / 2)]);
            }

            counter = leftSum === rightSum ? 1 : 0;
            return counter;
        };

        function calcComplicatedMethod(value) {

            let counter = 0;
            let evenValue = 0;
            let oddValue = 0;

            for (let i = 0; i < value.length; i++) {

                value[i] % 2 ? oddValue += +value[i] : evenValue += +value[i]
            };
            counter = oddValue === evenValue ? 1 : 0;
            return counter;
        };

        function validationData(min, max) {

            let reg = /^\d{6}$/;

            if (reg.test(min) && reg.test(max)) {
                return 0;
            } else
                return {
                    status: "failed",
                    reason: "Enter only positive six digits numeric values"
                };
        };

        let res = processingTickets(context.min, context.max);
        console.log(res);
    };
}());
