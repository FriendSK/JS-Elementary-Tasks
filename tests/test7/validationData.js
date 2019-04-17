function validationData(value) {

    if ((value) && (value > 0))
        return 0;

    else {
        if (!value)
            return {
                status: "failed",
                reason: "you have entered a non numeric or zero value"
            }
        else (value < 0)
        return {
            status: "failed",
            reason: "you have entered a negative value"
        }
    }
};