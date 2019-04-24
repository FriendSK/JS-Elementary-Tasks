jsElementaryTasks.task3 = function (triangles) {

    let getArraysOfArr = triangles.map((item) => {
        return Object.values(item)
    });

    let getSquare = getSquareOfTriangle(getArraysOfArr);

    function compareArrays(a, b) {
        return a[1] - b[1];
    };

    let sortResult = getSquare.sort(compareArrays);
    console.log(sortResult);
    return sortResult;
};
