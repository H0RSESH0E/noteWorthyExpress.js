const generatePassword = function () {

    const upperC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const specialC = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "]", '^', "_", '`', '{', '|', '}', '~'];
    const numericC = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const lowerC = upperC.map(upperC => upperC.toLowerCase());

    // Ensures that a number is passed as a condition of the for loop
    const idLength = 7;

    // Concatenates the desired character arrays into one source
    let arrayBank = [];

    arrayBank = arrayBank.concat(upperC);
    arrayBank = arrayBank.concat(lowerC);
    arrayBank = arrayBank.concat(specialC);
    arrayBank = arrayBank.concat(numericC)

    // creates a variable to collect the randomly selected characters
    var concatString = "";

    // assembles random characters from the arrayBank array in the variable concatString
    for (var i = 0; i < idLength; i++) {
        concatString = concatString.concat(arrayBank[(Math.floor(Math.random() * arrayBank.length))]);
    }

    // Returns the validated randomly generated password meeting all criteria
    return concatString;
}

module.exports = generatePassword;