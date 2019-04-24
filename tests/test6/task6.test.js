describe("getSequence", function () {

    function makeTest(x, y) {

        it(`During validation by entering "${x}" and "${y}" it calculates a  sequence  "${getSequence(x, y)}" `,
            function () {
                assert.equal((getSequence(x, y)), '2,3,4,5,6');
            });
    }
    makeTest(5, 6);
});



describe("validationDataForSequence", function () {

    it(`validates data by entering incorrect values and  expected to be an "object"`,

        function () {

            let arr = [0, -3, '3b', NaN, 'g', '', false, null, undefined,]

            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - 1; j++) {
                    assert.equal(typeof (validationDataForSequence(arr[i], arr[j])), 'object');
                }
            };
        });
});


describe("validationDataForSequence", function () {

    function makeTest(x, y) {

        it(`validates data by entering correct values and expected to be a "zero"`,
            function () {

                assert.equal(validationDataForSequence(x, y), 0);
            });
    }
    makeTest(4, 70);
});
