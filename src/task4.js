(function () {

    module.task4 = function () {

        let inputValue = prompt("Enter numbers").trim();

        function isPalindrome(str) {

            str = str.toString();

            if (!validationData(str)) {

                for (let i = 0; i < str.length; i++) {

                    for (let j = 0; j < str.length; j++) {
                        let row = str.slice(i, j + i + 1);
                        let row2 = row.split('').reverse().join('');

                        if (row == row2 && row.length > 2) return row;
                    };
                };
                return 0;
            } else return validationData(str);
        };

        function validationData(num) {

            let reg = /^\d+$/;

            if (reg.test(num)) {
                return 0;
            } else
                return {
                    status: "failed",
                    reason: "Enter only positive  natural digits"
                }
        };
        console.log(isPalindrome(inputValue));
    };
}());