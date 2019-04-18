describe("calcSoftMethod", function () {

    function makeTest(x) {

        it(`If the number "${x}" on ticket is the lucky number it counts   "${calcSoftMethod(x)}" `,
            function () {
                assert.equal(calcSoftMethod(x), '1');
            });
    }
    makeTest('123321');
});


describe("calcComplicatedMethod", function () {

    function makeTest(x) {

        it(`It counts sum of even and odd numbers "${x}" on ticket and return  "${calcComplicatedMethod(x)}" if it is equal `,
            function () {
                assert.equal(calcComplicatedMethod(x), '1');
            });
    }
    makeTest('111221');
});