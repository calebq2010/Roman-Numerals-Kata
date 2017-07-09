var romanNumeralConverter = function(inputNumber) {
    var roman = "";
    var romanNumbers = {
        "V": 5,
        "IV": 4,
        "I": 1
    };

    for (var i in romanNumbers) {
        var romanValue = romanNumbers[i];

        if (inputNumber == romanValue) {
            roman = i;
            return roman;
        }

        while (inputNumber >= romanValue) {
            roman += "I";
            inputNumber -= romanValue;
        }

    }

    return roman;
}

module.exports = romanNumeralConverter;