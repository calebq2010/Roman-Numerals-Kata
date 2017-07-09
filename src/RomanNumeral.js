var romanNumeralConverter = function(inputNumber) {
    var roman = "";
    var romanNumbers = {
        "X": 10,
        "V": 5,
        "IV": 4,
        "I": 1
    };

    for (var i in romanNumbers) {
        var romanValue = romanNumbers[i];

        // if (inputNumber == romanValue) {
        //     roman = i;
        //     return roman;
        // }

        while (inputNumber >= romanValue) {
            roman += i;
            inputNumber -= romanValue;
        }

    }

    return roman;
}

module.exports = romanNumeralConverter;