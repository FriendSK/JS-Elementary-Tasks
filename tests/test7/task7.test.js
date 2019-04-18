describe("validationData", function () {

    it("validates data", function () {

        let arr = [1, 4.5, 999999999999999, true]

        for (var i = 0; i < arr.length - 1; i++) {

            assert.equal(validationData(arr[i]), 0);
        }

    });
});

describe("validationData", function () {

    it("validates data", function () {

        let arr = [0, -3, '3b', NaN, 'g', '',false, null, undefined,]

        for (var i = 0; i < arr.length - 1; i++) {

            assert.equal(typeof(validationData(arr[i])), 'object');
        }

    });
});

describe("calcFiboByLength", function () {

    function makeTest(x) {

        it("During validation  it calculates a Fibo sequence by length",
            function () {
                result = calcFiboByLength(3);
                assert.equal(result.join(', '), '144, 233, 377, 610, 987');
            });
    }
    makeTest(3);
});

describe("calcFiboByRange", function () {

    function makeTest(x, y) {

        it("During validation  it calculates a Fibo sequence by range",
            function () {
                result = calcFiboByRange(2, 8);
                assert.equal(result.join(', '), '2, 3, 5, 8');
            });
    }
    makeTest(2, 8);
});