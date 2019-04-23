describe("getSequence", function () {

    function makeTest(x, y) {

        it(`During validation by entering "${x}" and "${y}" it calculates a  sequence  "${getSequence(x, y)}" `,
            function () {
                assert.equal((getSequence(x, y)), '2,3,4,5,6');
            });
    }
    makeTest(5, 6);
});
