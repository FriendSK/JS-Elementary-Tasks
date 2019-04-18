describe("validationData", function () {

    it("validates data", function () {

        let arr = [1, 4.5, 999999999999999, true,]

        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - 1; j++) {

                assert.equal(validationData(arr[i], arr[j]), 0);
            }
        };
    });
});

describe("validationData", function () {

    it("validates data", function () {

        let arr = [0, -3, '3b', NaN, 'g', false, null, undefined,]

        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - 1; j++) {

                assert.equal(typeof (validationData(arr[i], arr[j])), 'object');
            }
        };
    });
});

describe("transformData", function () {

    function makeTest(x, ) {

        it("During validation " + arr[i] + " is converting into a number and the result is: 'number'",
            function () {
                assert.equal(typeof (transformData(arr[i])), 'number');
            });
    }

    let arr = [0, -3, 4.3, 5.7888, '3b', NaN, 'g', false, true, null, undefined]

    for (var i = 0; i < arr.length - 1; i++) {
        makeTest(arr[i]);
    }
});



describe("calcSequence", function () {

    function makeTest(x, y) {

        it("During validation  it calculates a sequence",
            function () {
                assert.equal((calcSequence(x, y)), '2,3,4,5,6');
            });
    }
    makeTest(5, 6);
});
