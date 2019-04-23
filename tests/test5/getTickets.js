function getTickets(min, max) {

    let softMethodCount = 0;
    let complicatedMethodCount = 0;

    for (let i = min; i <= max; i++) {
        let arrData = dataToArray(i);

        softMethodCount += getSoftMethod(arrData);
        complicatedMethodCount += getComplicatedMethod(arrData);
    }

    if (softMethodCount > complicatedMethodCount) {

        return `{
                method: 'Soft method has won!',
                softMethod: ${softMethodCount},
                complicatedMethod: ${complicatedMethodCount}
            }`;
    } else if (softMethodCount < complicatedMethodCount) {

        return `{
                method: 'Complicated method has won!',
                softMethod: ${softMethodCount},
                complicatedMethod: ${complicatedMethodCount}
            }`;
    } else {
        return 'None of the methods have won!';
    };
};