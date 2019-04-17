function validationData(value1, value2) {

    if ((value1 && value2) && (value1 > 0 && value2 > 0)) {
        return 0;
    } else {

        if (!(value1 && value2))
            return {
                status: "failed",
                reason: "you have entered a non numeric or zero value"
            }
        else (value1 >= 0 && value2 >= 0)
        return {
            status: "failed",
            reason: "you have entered a negative value"
        }
    };
};
