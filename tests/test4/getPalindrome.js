function getPalindrome(str) {

    str = str.toString();

    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j < str.length; j++) {
            let row = str.slice(i, j + i + 1);
            let row2 = row.split('').reverse().join('');

            if (row == row2 && row.length > 2) return row;
        };
    };
    return 0;
};