(function () {

    module.task2 = function () {

        var env1 = {};
        var env2 = {};
        var firstSide = prompt("Enter the left side of the first envelope");
        var secondSide = prompt("Enter the right side of the first envelope");
        var thirdSide = prompt("Enter the left side of the second envelope");
        var fourthSide = prompt("Enter the right side of the second envelope");
        env1.h = parseFloat(firstSide);
        env1.w = parseFloat(secondSide);
        env2.h = parseFloat(thirdSide);
        env2.w = parseFloat(fourthSide);

        function compareEnvelops(env1, env2) {

            if (validationData(env1, env2)) {

                if ((env1.h > env2.h) && (env1.w > env2.w) || (env1.h > env2.w) && (env1.w > env2.h)) {
                    console.log('The 2 envelope can be put in the 1');
                }
                else if ((env2.h > env1.h) && (env2.w > env1.w) || (env1.h < env2.w) && (env1.w < env2.h)) {
                    console.log('The 1 envelope can be put in the 2');
                } else {
                    console.log('Envelops can`t be put into each other');
                };

            } else return;
        };

        function validationData(env1, env2) {

            if ((env1.h && env1.w && env2.h && env2.w)
                &&
                (env1.h >= 0 && env1.w >= 0 && env2.h >= 0 && env2.w >= 0)) {
                return true;
            } else {
                console.log('{status: "failed", reason: "you have entered incorrect data"}');
                return false;
            };
        };

        compareEnvelops(env1, env2);

    };
}());