function validationDataForTriangles(a, b, c) {
    return (!isNaN(a) && !isNaN(b) && !isNaN(c) && a > 0 && b > 0 && c > 0);
};