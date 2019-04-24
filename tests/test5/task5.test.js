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



describe("validationDataForTickets", function () {

    function makeTest(x, y) {
        it(`validates whether are numeric data  six-digits value or not and  expected to be a "zero" if so.`,

            function () {
                assert.equal(validationDataForTickets(x, y), 0);
            });
    }
    makeTest(123456, 234567);
});

describe("validationDataForTickets", function () {

    function makeTest(x) {

        it(`validates data by entering incorrect values and  expected to be an "object"`,
            function () {

                assert.equal(typeof (validationDataForTickets(x)), "object");
            });
    }
    makeTest(-8);
});
