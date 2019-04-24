describe("getFiboByLength", function () {

    function makeTest(x) {

        it(`During validation by entering "${x}"  it calculates a Fibo sequence by lenght into "${getFiboByLength(x)}" `,
            function () {

                let result = getFiboByLength(x);
                assert.equal(result.join(', '), '144, 233, 377, 610, 987');
            });
    }
    makeTest('3');
});

describe("getFiboByRange", function () {

    function makeTest(x, y) {

        it(`During validation by entering "${x}" and "${y}" it calculates a Fibo sequence by range into "${getFiboByRange(x, y)}" `,
            function () {

                let result = getFiboByRange(x, y);
                assert.equal(result.join(', '), '2, 3, 5, 8');
            });
    }
    makeTest('2', '8');
});

describe("validationDataForFiboByLength", function () {

    function makeTest(x) {
        it(`validates data by entering incorrect values and  expected to be a "zero"`,

            function () {


                assert.equal(typeof(validationDataForFiboByLength(x)), 'object');
            });
    }
    makeTest('ghd');
});


describe("validationDataForFiboByLength", function () {

    function makeTest(x) {

        it(`validates data by entering correct values and  expected to be a "zero"`,
            function () {

                assert.equal(validationDataForFiboByLength(x), 0);
            });
    }
    makeTest(4);
});


describe("validationDataForFiboByRange", function () {

    it(`validates data by entering incorrect values and  expected to be an "object"`,

        function () {

            let arr = [0, -3, '3b', NaN, 'g', '', false, null, undefined,]

            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - 1; j++) {
                    assert.equal(typeof (validationDataForFiboByRange(arr[i], arr[j])), 'object');
                }
            };
        });
});

describe("validationDataForFiboByRange", function () {

    function makeTest(x, y) {

        it(`validates data by entering correct values and expected to be a "zero"`,
            function () {

                assert.equal(validationDataForFiboByRange(x, y), 0);
            });
    }
    makeTest(2, 9);
});
