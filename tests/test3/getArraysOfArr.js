function getArraysOfArr(triangles) {

   let resArr = triangles.map((item) => {
        return Object.values(item)
    });
    return resArr;
};