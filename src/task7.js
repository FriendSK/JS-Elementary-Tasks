(function () {

  module.task7 = function () {

    var inputValue = prompt("Enter a  length of sequence");
    var value = parseFloat(inputValue).toFixed(0);

    var context = {
      lenght: value
    };

    var num = context.lenght;

    function fibo(n) {

      if (validationData(n)) {
        if (n === 1)

          return [0, 1];

        else {
          var array = fibo(n - 1);
          array.push(array[array.length - 1] + array[array.length - 2]);
          return array;
        };
      } else {
        console.log('{status: "failed", reason: "you have entered incorrect data"}');
      };
    };

    function validationData(value) {

      if ((value) && (value > 0)) {

        return true;
      };
      return false;
    };

    console.log(fibo(num));
  };
}());