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