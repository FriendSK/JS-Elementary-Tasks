(function () {

    module.task2 = function () {

        var env1 = {};
        var env2 = {};
        var firstSide = prompt("Enter the left side of the first envelope").trim();
        var secondSide = prompt("Enter the right side of the first envelope").trim();
        var thirdSide = prompt("Enter the left side of the second envelope").trim();
        var fourthSide = prompt("Enter the right side of the second envelope").trim();
        env1.h = parseFloat(firstSide);
        env1.w = parseFloat(secondSide);
        env2.h = parseFloat(thirdSide);
        env2.w = parseFloat(fourthSide);

        function compareEnvelops(env1, env2) {

            if (!validationData(env1, env2)) {

                if ((env1.h > env2.h) && (env1.w > env2.w) || (env1.h > env2.w) && (env1.w > env2.h)) {
                    console.log('The 2 envelope can be put in the 1');
                }
                else if ((env2.h > env1.h) && (env2.w > env1.w) || (env1.h < env2.w) && (env1.w < env2.h)) {
                    console.log('The 1 envelope can be put in the 2');
                } else {
                    console.log('Envelops can`t be put into each other');
                };

            } else return validationData(env1, env2);
        };

        function validationData(env1, env2) {

            if ((env1.h && env1.w && env2.h && env2.w)
                &&
                (env1.h > 0 && env1.w > 0 && env2.h > 0 && env2.w > 0)) {
                return 0;
            } else  return {
                status: "failed",
                reason: "Enter only positive numeric values"
            };
        };

     console.log(compareEnvelops(env1, env2));
    };
}());