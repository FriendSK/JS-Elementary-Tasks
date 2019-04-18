(function () {

    window.module = {};
    module.task1 = function () {

        let heightValue = prompt("Enter a chessboard height").trim();
        let widthValue = prompt("Enter a chessboard width").trim();
        let sym = prompt("Enter a symbol to display").trim();

        function transformData(data) {
            let value = +parseInt(data);
            return value;
        }

        function makeChessboard(heightValue, widthValue) {

            let height = transformData(heightValue);
            let width = transformData(widthValue);

            if (!validationData(height, width)) {

                document.write('<table  border="0" cellspacing="1" cellpadding="3">');

                for (let i = 0; i < height; i++) {
                    document.write('<tr>');

                    for (let j = 0; j < width; j++) {

                        if (i % 2 === 0) {
                            document.write('<td>' + sym + '</td>');
                        } else {
                            document.write('<td>' + '&nbsp' + sym + '</td>');
                        };
                    };
                    document.write('</tr>');
                };
            } else return validationData(height, width);
        };

        function validationData(value1, value2) {

            if (value1 && value2 && value1 > 0 && value2 > 0) {
                return 0;
            } else
                return {
                    status: "failed",
                    reason: "Enter only positive numbers"
                };
        };
        console.log(makeChessboard(heightValue, widthValue));
    };
}());

