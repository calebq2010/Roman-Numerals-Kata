var romanNumeralConverter = function(inputNumber) {
    var roman = "";

    for (i = 0; i < inputNumber; i++) {
        roman += "I";
    }

    return roman;
}

module.exports = romanNumeralConverter;