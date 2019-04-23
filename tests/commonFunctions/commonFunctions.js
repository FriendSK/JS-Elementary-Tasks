function transformFloatData(data) {
    let value = +parseFloat(data).toFixed(0);
    return value;
};

function transformIntData(data) {
    let value = +parseInt(data);
    return value;
}
