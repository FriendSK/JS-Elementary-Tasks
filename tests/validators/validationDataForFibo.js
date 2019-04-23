function validationDataForFibo(value) {

    if (value && value > 0)
        return 0;

    else if (!value)
        return obj = {
            status: "failed",
            reason: "you have entered a non numeric or zero value!"
        }
    else
        return obj = {
            status: "failed",
            reason: "you have entered a negative value!"
        };
};

