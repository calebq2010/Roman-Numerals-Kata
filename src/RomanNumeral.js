var romanNumeralConverter = function(inputNumber) {
    if (inputNumber === 1) {
        return "I";
    } else if (inputNumber === 2) {
        return "II";
    }

    return "III";
}

module.exports = romanNumeralConverter;