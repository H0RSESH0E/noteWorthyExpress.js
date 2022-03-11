// In the future I would load all of the existing ids from the db.json file and
// keep track of all the ones that are generated and then regenerate if, however unlikely,
// a duplicate was created

const genId = function () {

    const upperC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numericC = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const lowerC = upperC.map(upperC => upperC.toLowerCase());

    // Sets the length of the id code
    const idLength = 12;

    // Concatenates the desired character arrays into one source
    let arrayBank = [];
    arrayBank = arrayBank.concat(upperC);
    arrayBank = arrayBank.concat(lowerC);
    arrayBank = arrayBank.concat(numericC);

    // assembles random characters from the arrayBank array in the variable concatString
    var concatString = "";
    for (var i = 0; i < idLength; i++) {
        concatString = concatString.concat(arrayBank[(Math.floor(Math.random() * arrayBank.length))]);
    }

    // Returns the validated randomly generated password meeting all criteria
    return concatString;
}

module.exports = genId;