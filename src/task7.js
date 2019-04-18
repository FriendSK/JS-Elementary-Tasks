(function () {

    module.task7 = function () {

        let inputValue = prompt("Enter a  length of sequence").trim();
        let context = {
            length: inputValue
        };

        function transformData(data) {
            let value = +parseFloat(data).toFixed(0);
            return value;
        };
        
        function calcFibo(value) {

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
        console.log(calcFibo(context.length));
    };
}());
