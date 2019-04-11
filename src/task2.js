(function () {

    module.task2 = function () {

        var env1 = {};
        var env2 = {};
        var firstSide = prompt("Enter the left side of the first envelope");
        var secondSide = prompt("Enter the right side of the first envelope");
        var thirdSide = prompt("Enter the left side of the second envelope");
        var fourthSide = prompt("Enter the right side of the second envelope");
        env1.l = parseFloat(firstSide);
        env1.r = parseFloat(secondSide);
        env2.l = parseFloat(thirdSide);
        env2.r = parseFloat(fourthSide);

        function compareEnvelops(env1, env2) {

            if (validationData(env1, env2)) {

                if ((env1.l > env2.l) && (env1.r > env2.r)) {
                    console.log('The 2 envelope can be put in the 1');
                }
                else if ((env2.l > env1.l) && (env2.r > env1.r)) {
                    console.log('The 1 envelope can be put in the 2');
                }
                else if ((env1.l > env2.r) && (env1.r > env2.l)) {
                    console.log('The 2 envelope can be put in the 1');
                }
                else if ((env1.l < env2.r) && (env1.r < env2.l)) {
                    console.log('The 1 envelope can be put in the 2');
                }
                else {
                    console.log('Envelops cant be put into each other');
                };

            } else {
                console.log('{status: "failed", reason: "you have entered incorrect data"}');
            };
        };

        function validationData(env1, env2) {

            if ((env1.l && env1.r && env2.l && env2.r)
                &&
                (env1.l >= 0 && env1.r >= 0 && env2.l >= 0 && env2.r >= 0)) {

                return true;
            }
            return false;
        };

        compareEnvelops(env1, env2);

    };
}());