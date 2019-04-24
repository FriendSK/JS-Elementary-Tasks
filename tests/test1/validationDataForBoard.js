function validationDataForBoard(value1, value2) {

    if (value1 && value2 && value1 > 0 && value2 > 0) {
        return 0;
    } else
        return obj = {
            status: "failed",
            reason: "enter only positive numbers and any symbol!"
        };
};