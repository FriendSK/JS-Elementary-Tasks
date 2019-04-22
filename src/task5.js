jsElementaryTasks.task5 = function (context) {

    let min = context.min;
    let max = context.max;

    function getTickets(min, max) {

        if (!validationDataForTickets(min, max)) {
            let softMethodCount = 0;
            let complicatedMethodCount = 0;

            for (let i = min; i <= max; i++) {
                let arrData = dataToArray(i);

                softMethodCount += getSoftMethod(arrData);
                complicatedMethodCount += getComplicatedMethod(arrData);
            }

            if (softMethodCount > complicatedMethodCount) {

                return `{
                    method: 'Soft method has won!',
                    softMethod: ${softMethodCount},
                    complicatedMethod: ${complicatedMethodCount}
                }`;
            } else if (softMethodCount < complicatedMethodCount) {

                return `{
                    method: 'Complicated method has won!',
                    softMethod: ${softMethodCount},
                    complicatedMethod: ${complicatedMethodCount}
                }`;
            } else {
                return 'None of the methods have won!';
            };
        } else return `Status: ${obj.status}, reason: ${obj.reason}`;
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

    function getSoftMethod(value) {

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

    function getComplicatedMethod(value) {

        let counter = 0;
        let evenValue = 0;
        let oddValue = 0;

        for (let i = 0; i < value.length; i++) {

            value[i] % 2 ? oddValue += +value[i] : evenValue += +value[i]
        };
        counter = oddValue === evenValue ? 1 : 0;
        return counter;
    };
    return getTickets(min, max);
};
