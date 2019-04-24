describe("getPalindrome", function () {

    function makeTest(x) {

        it(`It calculates whether  numeric data "${x}" has palindrome or not  and returns it  "${getPalindrome(x)}" if so. `,
            function () {
                assert.equal(getPalindrome(x), 23432);
            });
    }
    makeTest(1234325);
});




describe("validationDataForPalindrome", function () {

    function makeTest(x) {
        it(`validates whether  is it numeric data  value or not and  expected to be a "zero" if so.`,

            function () {
                assert.equal(validationDataForPalindrome(x), 0);
            });
    }
    makeTest(1234326);
});


describe("validationDataForPalindrome", function () {

    function makeTest(x) {

        it(`validates data by entering incorrect values and expected to be an "object"`,
            function () {

                assert.equal(typeof (validationDataForPalindrome(x)), "object");
            });
    }
    makeTest(-5);
});
