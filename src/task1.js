let jsElementaryTasks = {};

jsElementaryTasks.task1 = function (heightValue, widthValue, sym) {

    function getChessboard(heightValue, widthValue, sym) {

        let height = transformIntData(heightValue);
        let width = transformIntData(widthValue);

        if (!validationDataForBoard(height, width)) {

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

        } else return `Status: ${obj.status}, reason: ${obj.reason}`;
    };
    return getChessboard(heightValue, widthValue, sym);
};

