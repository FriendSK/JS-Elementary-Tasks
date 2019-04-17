(function () {

    module.task3 = function () {

        var triangles = [
            {
                vertices: 'ABC',
                a: 10,
                b: 22,
                c: 27.36
            },
            {
                vertices: 'ACD',
                a: 25,
                c: 33,
                d: 35.44
            },
            {
                vertices: 'ABD',
                a: 24,
                b: 26,
                d: 28.11
            }
        ]

        var arraysOfArr = triangles.map((item) => {
            return Object.values(item)
        });

        var calculateSquare = arraysOfArr.map((item) => {
            var arr = [item[0]];
            var p = (item[1] + item[2] + item[3]) / 2;
            var s = Math.sqrt(p * (p - item[1]) * (p - item[2]) * (p - item[3]));
            arr.push(s);
            return arr;
        });

        console.log(calculateSquare);

        function compareArrays(a, b) {
            return a[1] - b[1];
        };

        var sortResult = calculateSquare.sort(compareArrays);

        function showResultNames() {

            for (var i = 0; i < sortResult.length; i++) {
                console.log(sortResult[i][0]);
            };
        };
        showResultNames(sortResult);
    };
}());
