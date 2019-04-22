function transformDataFloat(data) {
    let value = +parseFloat(data).toFixed(0);
    return value;
};

function transformDataInt(data) {
    let value = +parseInt(data);
    return value;
}
