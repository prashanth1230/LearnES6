function acceptParameters(a?, b?, c?) {
    a = a === undefined ? 1 : a;
    b = b === undefined ? 2 : b;
    c = c === undefined ? 3 : c;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

acceptParameters();

acceptParameters(4, 5, 6);

//Using default parameters
function acceptParametersWithDefaults(a = 1, b = 2, c = 3) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

acceptParametersWithDefaults();

acceptParametersWithDefaults(7, 8, 9);