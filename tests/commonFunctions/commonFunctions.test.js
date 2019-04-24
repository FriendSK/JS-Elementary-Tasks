describe("transformFloatData", function () {

    function makeTest(x) {

        it(`During validation by entering "${x}"  it transforms floating point data into a number "${transformFloatData(x)}" `,
            function () {
                result = transformFloatData(x);
                assert.equal(result, 4);
            });
    }
    makeTest('3.67');
});

describe("transformIntData", function () {

    function makeTest(x) {

        it(`During validation by entering "${x}"  it transforms  integer data into a number "${transformIntData(x)}" `,
            function () {
                result = transformIntData(x);
                assert.equal(result, 3);
            });
    }
    makeTest('3.4');
});

describe("isTriangle", function () {

    function makeTest(x, y, z) {

        it(`validates whether  a triangle with such sides is exist or not and  expected to be a "true" if so.`,
            function () {
                assert.equal((isTriangle(x, y, z)), true);
            });
    }
    makeTest(4, 2, 4);
});


