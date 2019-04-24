jsElementaryTasks.task7 = function (event, context) {

    function getFiboByLength(context) {
        let len = transformIntData(context.length); // parseInt incoming Data
        let getNum = 0;
        let arr = [0, 1];
        let res = [];

        if (!validationDataForFiboByLength(len)) {  //validation of the incoming data

            for (let i = 2; getNum.toString().length < len + 1; i++) { //loop from  last but one element length to a given

                arr.push(arr[i - 1] + arr[i - 2]);          // push the sum of the last two elements into origin array [0, 1]
                getNum = arr[i - 1];                        //get the last but one element of arr
                if (getNum.toString().length === len) {   // comparison of its  string length to a given length and pushing 
                    res.push(getNum);                      //numbers that match to a given length
                }
            };
            return res;
        } else return `Status: ${obj.status}, reason: ${obj.reason}`;  //if an error, return the status
    };

    function getFiboByRange(context) {

        let min = transformFloatData(context.min);   // parseFloat incoming Data
        let max = transformFloatData(context.max);    // parseFloat incoming Data
        let getNum = 0;
        let arr = [0, 1];
        let res = [];

        if (!validationDataForFiboByRange(+context.min, +context.max)) {  //validation of the incoming data

            for (let i = 2; getNum < max; i++) {        ////loop from  last but one element to a given max length

                arr.push(arr[i - 1] + arr[i - 2]);       // push the sum of the last two elements into origin array [0, 1]
                getNum = arr[i - 1];                    //get the last but one element of arr 
                if (getNum >= min && getNum <= max) {    //comparison and pushing current element if it match to a given interval
                    res.push(getNum);
                }
            };
            return res;
        } else return `Status: ${obj.status}, reason: ${obj.reason}`;  //if an error, return the status
    };

    function getAnswerChoise(event) {

        if (event.target.getAttribute('data') === '2')  // get the choise of calculations depending on 
                                                        // the  pressed button
            return getFiboByLength(context);

        else return getFiboByRange(context);
    };
    return getAnswerChoise(event);
};
