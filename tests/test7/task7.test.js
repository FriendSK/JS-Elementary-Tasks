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

