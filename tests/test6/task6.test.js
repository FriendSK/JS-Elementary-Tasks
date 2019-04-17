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
