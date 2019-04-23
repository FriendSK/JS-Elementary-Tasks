describe("getSoftMethod", function () {

    function makeTest(x) {

        it(`If the number "${x}" on ticket is the lucky number it counts   "${getSoftMethod(x)}" `,
            function () {
                assert.equal(getSoftMethod(x), '1');
            });
    }
    makeTest('123321');
});


describe("getComplicatedMethod", function () {

    function makeTest(x) {

        it(`It counts sum of even and odd numbers "${x}" on ticket and returns  "${getComplicatedMethod(x)}" if it is equal `,
            function () {
                assert.equal(getComplicatedMethod(x), '1');
            });
    }
    makeTest('111221');
});


describe("dataToArray", function () {

    function makeTest(x) {

        it(`It converts data ${x} to array  and returns  it `,
            function () {
                assert.equal(dataToArray(x).toString(), '2,3,2,3,2,3');
            });
    }
    makeTest(232323);
});


describe("getTickets", function () {

    function makeTest(x, y) {

        it(`Calculates counting methods of tickets from  "${x}" to  "${y}" numeric range and returns a solution string  "${getTickets(x, y)}" `,
            function () {
                assert.equal(typeof(getTickets(x, y)), 'string');
            });
    }
    makeTest(123213, 234234);
});
