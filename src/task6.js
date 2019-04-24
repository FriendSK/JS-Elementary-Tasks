jsElementaryTasks.task6 = function (row, min) {

    function getSequence(row, min) {

        let resultArr = [];
        let len = transformFloatData(row);     // parseFloat incoming Data
        let square = transformFloatData(min);    // parseFloat incoming Data
        let sqrt = +Math.sqrt(square).toFixed(0);  //calculating square root

        if (!validationDataForSequence(len, sqrt)) {  //validation of the incoming data

            for (let i = sqrt; i < sqrt + len; i++) {  //loop from square root to sum of  square root and lenght 
                resultArr.push(i);                      //push the suitable  numbers to array
            }
            return resultArr.join(',');                 // make a string from array

        } else return `Status: ${obj.status}, reason: ${obj.reason}`; //if an error, return the status
    };
    return getSequence(row, min);
};
