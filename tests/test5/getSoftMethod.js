function getSoftMethod(value) {

    let counter = 0;
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < value.length / 2; i++) {
        leftSum += +(value[i]);
        rightSum += +(value[i + (value.length / 2)]);
    }

    counter = leftSum === rightSum ? 1 : 0;
    return counter;
};