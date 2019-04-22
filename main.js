let input = document.querySelectorAll('input');
let output = document.querySelectorAll('#output');

runTask1 = () => {

    let height = input[0].value.trim();
    let width = input[1].value.trim();
    let symbol = input[2].value.trim();
    output[0].innerHTML = jsElementaryTasks.task1(height, width, symbol);
};

runTask2 = () => {

    let firstSide = input[3].value.trim();
    let secondSide = input[4].value.trim();
    let thirdSide = input[5].value.trim();
    let fourthSide = input[6].value.trim();
    output[1].innerHTML = jsElementaryTasks.task2(firstSide, secondSide, thirdSide, fourthSide);
};

let triangles = [];

addTriangle = () => {

    let vertices = input[7].value.trim();
    let a = input[8].value.trim();
    let b = input[9].value.trim();
    let c = input[10].value.trim();
    let obj = {};
    obj.vertices = vertices;
    obj.a = +a;
    obj.b = +b;
    obj.c = +c;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a > 0 && b > 0 && c > 0) {

        input[7].value = '';
        input[8].value = '';
        input[9].value = '';
        input[10].value = '';
        return triangles.push(obj);
    } else
        output[2].innerHTML = `
            status: "failed",
            reason: "you have entered a non numeric or zero value!"`
};

runTask3 = (triangles) => {
    output[2].innerHTML = jsElementaryTasks.task3(triangles);
};

runTask4 = () => {

    let inputValue = input[11].value.trim();
    output[3].innerHTML = jsElementaryTasks.task4(inputValue);
};

runTask5 = () => {

    let inputValue1 = input[12].value.trim();
    let inputValue2 = input[13].value.trim();
    let context = {
        min: inputValue1,
        max: inputValue2
    };
    output[4].innerHTML = jsElementaryTasks.task5(context);
};

runTask6 = () => {

    let rowLength = input[14].value.trim();
    let minSquare = input[15].value.trim();
    output[5].innerHTML = jsElementaryTasks.task6(rowLength, minSquare);
};

runTask7 = () => {
    let fibo = document.querySelector('#fibo');
    fibo.onclick = function (event) {
        return event;
    };
    let minValue = input[16].value.trim();
    let maxValue = input[17].value.trim();
    let lengthValue = input[18].value.trim();
    let context = {
        length: lengthValue,
        min: minValue,
        max: maxValue
    };
    output[6].innerHTML = jsElementaryTasks.task7(event, context);
};