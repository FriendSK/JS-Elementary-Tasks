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