var romanNumeralConverter = function(inputNumber) {
    var roman = "";

    if (inputNumber < 4) {

        for (i = 0; i < inputNumber; i++) {
            roman += "I";

        }
        return roman;
    }

    return "IV";
}

module.exports = romanNumeralConverter;