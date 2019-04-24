describe("getChessboard", function () {

    function makeTest(x, y, z) {

        it(`During validation it calculates a table  with sides "${x}" "${y}" and symbol "${z}"  and returns the result  Chessboard`,
            function () {
                assert.equal((typeof (getChessboard(x, y, z))), 'string');
            });
    }
    makeTest('4', '5', '*');
});




describe("validationDataForBoard", function () {

    function makeTest(x, y) {

        it(`validates data by entering correct values  expected to be a "zero"`,
            function () {

                assert.equal(validationDataForBoard(x, y), 0);
            });
    }
    makeTest(4, 6);
});



describe("validationDataForBoard", function () {

    it(`validates data by entering incorrect values  expected to be an "object"`,

        function () {

            let arr = [0, -3, '3b', NaN, 'g', '', false, null, undefined,]

            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - 1; j++) {
                    assert.equal(typeof (validationDataForBoard(arr[i], arr[j])), 'object');
                }
            };
        });
});