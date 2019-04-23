describe("getPalindrome", function () {

    function makeTest(x) {

        it(`It calculates whether  numeric data "${x}" has palindrome or not  and returns it  "${getPalindrome(x)}" if so. `,
            function () {
                assert.equal(getPalindrome(x), 23432);
            });
    }
    makeTest(1234325);
});