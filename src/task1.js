(function () {

    window.module = {};
    module.task1 = function () {

        var heightValue = prompt("Enter a chessboard height").trim();
        var widthValue = prompt("Enter a chessboard width").trim();
        var sym = prompt("Enter a symbol to display").trim();
        var height = parseInt(heightValue);
        var width = parseInt(widthValue);

        function makeChessboard(height, width) {

            if (validationData(height, width)) {
                document.write('<table  border="0" cellspacing="1" cellpadding="3">');

                for (var i = 0; i < height; i++) {
                    document.write('<tr>');

                    for (var j = 0; j < width; j++) {

                        if (i % 2 === 0) {
                            document.write('<td>' + String(sym) + '</td>');
                        } else {
                            document.write('<td>' + '&nbsp' + String(sym) + '</td>');
                        };
                    };
                    document.write('</tr>');
                };
            } else return;
        };

        function validationData(value1, value2) {

            if ((value1 && width) && (value2 > 0 && value2 > 0)) {
                return true;
            } else {
                console.log('{status: "failed", reason: "you have entered incorrect data"}');
                return false;
            };
        };

        makeChessboard(height, width);
    };
}());

