function getChessboard(heightValue, widthValue, sym) {

    let height = +heightValue;
    let width = +widthValue;

    let str = '';

    for (let i = 0; i < height; i++) {

        for (let j = 0; j < width; j++) {

            if (i % 2 === 0) {
                str += '&nbsp' + sym + '&nbsp';
            } else {
                str += '&nbsp' + '&nbsp' + sym;
            };
        };
        str = str + '<br>';
    };
    return str;
};