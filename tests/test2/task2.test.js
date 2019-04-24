describe("compareEnvelops", function () {
    let env1 = {
        h: 3,
        w: 4
    };
    let env2 = {
        h: 2,
        w: 2
    }
    function makeTest(x, y) {

        it(`During validation it compares two envelops with sides "${env1.h}" "${env1.w}" and "${env2.h}" "${env2.w}" and returns the result  'The 2nd envelope can be put in the 1st' `,
            function () {
                assert.equal((compareEnvelops(x, y)), 'The 2nd envelope can be put in the 1st');
            });
    }
    makeTest(env1, env2);
});



describe("validationDataForEnvelops", function () {
    let env1 = {
        h: 3,
        w: 4
    };
    let env2 = {
        h: 2,
        w: 2
    }
    function makeTest(x, y) {

        it(`validates whether  is it positive numeric data  value or not and  expected to be a "zero" if so.`,
            function () {
                assert.equal((validationDataForEnvelops(x, y)), 0);
            });
    }
    makeTest(env1, env2);
});


describe("validationDataForEnvelops", function () {
    let env1 = {
        h: 0,
        w: 4
    };
    let env2 = {
        h: 'h',
        w: 2
    }
    function makeTest(x, y) {

        it(`validates data by entering incorrect values and  expected to be an "object"`,
            function () {
                assert.equal(typeof (validationDataForEnvelops(x, y)), 'object');
            });
    }
    makeTest(env1, env2);
});