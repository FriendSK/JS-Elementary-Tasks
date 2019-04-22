jsElementaryTasks.task2 = function (firstSide, secondSide, thirdSide, fourthSide) {

    let env1 = {};
    let env2 = {};
    env1.h = transformDataInt(firstSide);
    env1.w = transformDataInt(secondSide);
    env2.h = transformDataInt(thirdSide);
    env2.w = transformDataInt(fourthSide);

    function compareEnvelops(env1, env2) {

        if (!validationDataForEnvelops(env1, env2)) {

            if (env1.h > env2.h && env1.w > env2.w || env1.h > env2.w && env1.w > env2.h) {
                return 'The 2nd envelope can be put in the 1st';
            }
            else if (env2.h > env1.h && env2.w > env1.w || env1.h < env2.w && env1.w < env2.h) {
                return 'The 1st envelope can be put in the 2nd';
            } else {
                return 'Envelops can`t be put into each other';
            };

        } else return `Status: ${obj.status}, reason: ${obj.reason}`;
    };
    return compareEnvelops(env1, env2);
};