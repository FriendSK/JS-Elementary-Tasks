function validationDataForFiboByRange(value1, value2) {

    if (value1 && value2 && value1 > 0 && value2 > 0 && value1 < value2) {
        return 0;
    } else {

        if (!(value1 && value2))
            return obj = {
                status: "failed",
                reason: "you have entered a non numeric or zero value!"
            }
        else if (value1 > value2)
            return obj = {
                status: "failed",
                reason: "min value is greater than max!"
            }
        else
            return obj = {
                status: "failed",
                reason: "you have entered a negative value!"
            }
    };
};