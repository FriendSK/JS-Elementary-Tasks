function calcComplicatedMethod(value) {

    let counter = 0;
    let evenValue = 0;
    let oddValue = 0;

    for (let i = 0; i < value.length; i++) {

        value[i] % 2 ? oddValue += +value[i] : evenValue += +value[i]
    };
    counter = oddValue === evenValue ? 1 : 0;
    return counter;
};