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