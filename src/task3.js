jsElementaryTasks.task3 = function (triangles) {

    let getArraysOfArr = triangles.map((item) => {
        return Object.values(item)
    });

    let getSquare = getArraysOfArr.map((item) => {

        let arr = [item[0]];
        let p = (item[1] + item[2] + item[3]) / 2;
        let s = Math.sqrt(p * (p - item[1]) * (p - item[2]) * (p - item[3])).toFixed(2);
        arr.push(s);
        return arr;
    });

    function compareArrays(a, b) {
        return a[1] - b[1];
    };

    let sortResult = getSquare.sort(compareArrays);
    return sortResult;
};
