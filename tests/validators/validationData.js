describe("validationDataForFibo", function () {

    it(`validates data by entering incorrect values  expected to be a "zero"`,

        function () {

            let arr = [1, 4.5, 999999999999999, true]

            for (var i = 0; i < arr.length - 1; i++) {
                assert.equal(validationDataForFibo(arr[i]), 0);
            }
        });
});

describe("validationDataForFibo2", function () {

    it(`validates data by entering incorrect values  expected to be an "object"`,

        function () {

            let arr = [0, -3, '3b', NaN, 'g', '', false, null, undefined,]

            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - 1; j++) {
                    assert.equal(typeof (validationDataForFibo2(arr[i], arr[j])), 'object');
                }
            };
        });
});

describe("validationDataForSequence", function () {

    it(`validates data by entering incorrect values  expected to be an "object"`,

        function () {

            let arr = [0, -3, '3b', NaN, 'g', '', false, null, undefined,]

            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - 1; j++) {
                    assert.equal(typeof (validationDataForSequence(arr[i], arr[j])), 'object');
                }
            };
        });
});


describe("validationDataForTickets", function () {

    function makeTest(x, y) {
        it(`validates whether are numeric data  six-digits value or not and  expected to be a "zero" if so.`,

            function () {
                assert.equal(validationDataForTickets(x, y), 0);
            });
    }
    makeTest(123456,234567);
});


describe("validationDataForPalindrome", function () {

    function makeTest(x) {
        it(`validates whether  is it numeric data  value or not and  expected to be a "zero" if so.`,

            function () {
                assert.equal(validationDataForPalindrome(x), 0);
            });
    }
    makeTest(1234326);
});
