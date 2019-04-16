(function () {

  module.task7 = function () {

    var inputValue = prompt("Enter a  length of sequence").trim();
    var lengthValue = parseFloat(inputValue).toFixed(0);
    var context = {
        length: lengthValue
    };

    function getObjLength(obj) {
        return +obj.length;
    };

    function calcFibo(num) {

        if (validationData(num)) {

            if (num === 1)
                return [0, 1];
            else {
                var array = calcFibo(num - 1);
                array.push(array[array.length - 1] + array[array.length - 2]);
                return array;
            };
        } else return;
    };

    function validationData(value) {

        if ((value) && (value > 0)) {
            return true;
        } else {
            console.log('{status: "failed", reason: "you have entered incorrect data"}');
            return false;
        };
    };
        console.log(calcFibo(getObjLength(context)));
    };
}());