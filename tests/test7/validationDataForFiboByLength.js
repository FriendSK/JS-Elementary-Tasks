function validationDataForFiboByLength(value) {

    if (value && value > 0 && value < 22)
        return 0;

    else {
        if (!value)
            return obj = {
                status: "failed",
                reason: "you have entered a non numeric or zero value!"
            }
        if (value > 21)
            return obj = {
                status: "failed",
                reason: "too large to calculate!"
            }
        else
            return obj = {
                status: "failed",
                reason: "you have entered a negative value!"
            };
    }
};
