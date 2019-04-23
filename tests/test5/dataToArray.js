function dataToArray(value) {
    let arr = [];
    arr.length = 6;
    let str = value.toString();

    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i]

    };
    return arr;
};
