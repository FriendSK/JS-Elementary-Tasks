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




// describe("transformIntData", function () {

//     function makeTest(x) {

//         it("During validation " + arr[i] + " is converting intData into a number and the result is: 'number'",
//             function () {
//                 assert.equal(typeof (transformIntData(arr[i])), 'number');
//             });
//     }

//     let arr = [0, -3, 4.3, 5.7888, '3b', NaN, 'g', false, true, null, undefined]

//     for (var i = 0; i < arr.length - 1; i++) {
//         makeTest(arr[i]);
//     }
// });

