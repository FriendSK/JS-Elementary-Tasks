describe("validationData", function () {

    it("validates data", function () {

        let arr = [1, 4.5, 999999999999999, true,]

        for (var i = 0; i < arr.length - 1; i++) {

            assert.equal(validationData(arr[i]), 0);
        }

    });
});

describe("validationData", function () {

    it("validates data", function () {

        let arr = [0, -3, '3b', NaN, 'g', false, null, undefined,]

        for (var i = 0; i < arr.length - 1; i++) {

            assert.equal(typeof(validationData(arr[i])), 'object');
        }

    });
});


