describe("getArraysOfArr", function () {


    it(`It converts object data  to array  and returns  it  `,
        function () {
            let triangles = [
                {
                    ver: 'abc',
                    a: 1,
                    b: 2,
                    c: 3
                }
            ]
            assert.equal(getArraysOfArr(triangles).toString(), ['abc', 1, 2, 3]);
        });
});


describe("getSquare", function () {


    it(`It calculates square from arrays and returns  it  `,
        function () {
            let arr = [['abc', 2, 3, 4], ['abd', 3, 8, 10], ['adc', 4, 6, 9]]
            assert.equal(getSquare(arr).toString(), 'abc,2.90,abd,9.92,adc,9.56');
        });
});

describe("validationDataForTriangles", function () {

    function makeTest(x, y, z) {

        it(`validates whether  is it positive numeric data  value or not and  expected to be a "true" if so.`,
            function () {
                assert.equal((validationDataForTriangles(x, y, z)), true);
            });
    }
    makeTest(4, 2, 4);
});