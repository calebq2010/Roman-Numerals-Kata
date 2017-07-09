var romanNumeralConverter = function(inputNumber) {
    var roman = "";
    var romanNumbers = {
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "IV": 4,
        "I": 1
    };

    for (var i in romanNumbers) {
        var romanValue = romanNumbers[i];

        while (inputNumber >= romanValue) {
            roman += i;
            inputNumber -= romanValue;
        }

    }

    return roman;
}

module.exports = romanNumeralConverter;