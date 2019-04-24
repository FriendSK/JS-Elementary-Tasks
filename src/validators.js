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
                reason: "Min value is greater than max!"
            }
        else
            return obj = {
                status: "failed",
                reason: "you have entered a negative value!"
            }
    };
};

function validationDataForSequence(value1, value2) {

    if (value1 && value2 && value1 > 0 && value2 > 0) {
        return 0;
    } else {

        if (!(value1 && value2))
            return obj = {
                status: "failed",
                reason: "you have entered a non numeric or zero value!"
            }
        else
            return obj = {
                status: "failed",
                reason: "you have entered a negative value!"
            }
    };
};

function validationDataForTickets(min, max) {

    let reg = /^\d{6}$/;

    if (reg.test(min) && reg.test(max)) {
        return 0;
    } else
        return obj = {
            status: "failed",
            reason: "enter only positive six-digits numeric values!"
        };
};

function validationDataForPalindrome(num) {

    let reg = /^\d+$/;

    if (reg.test(num)) {
        return 0;
    } else
        return obj = {
            status: "failed",
            reason: "enter only positive natural digits!"
        }
};

function validationDataForEnvelops(env1, env2) {

    if ((env1.h && env1.w && env2.h && env2.w)
        &&
        (env1.h > 0 && env1.w > 0 && env2.h > 0 && env2.w > 0)) {
        return 0;
    } else
        return obj = {
            status: "failed",
            reason: "enter only positive numeric values!"
        };
};

function validationDataForBoard(value1, value2) {

    if (value1 && value2 && value1 > 0 && value2 > 0) {
        return 0;
    } else
        return obj = {
            status: "failed",
            reason: "enter only positive numbers and any symbol!"
        };
};