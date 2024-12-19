// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
START
SET price = INPUT
SET numberOfPeople = INPUT
SET tipPercent = INPUT
FUNCTION named calculateIndividualPrice
    SET totalPrice = price * (1 + tipPercent)
    SET individualPrice = totalPrice / numberOfPeople
    RETURN individualPrice
ENDFUNCTION

//Press the button
SET priceToPay = CALL FUNCTION named calculateIndividualPrice
PRINT "Varje person ska betala " + priceToPay + " kr"
END
*/




// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*
START
SET startWord = "FOUR"
SET endWord = "FIVE"
SET newWord = startWord
SET count = 0
SET dictionary = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
FUNCTION named countLetterDifferences
    SET differences = 0
    LOOP FOR each letter in startWord
        IF index value in newWord !== index value in startWord THEN
            differences++
    ENDLOOP
    RETURN differences
ENDFUNCTION

LOOP WHILE startWord !== endWord
    PRINT "Your word is: " + newWord
    PRINT "Goal: " + endWord
    //Accept input on newWord so the user can change it
    INPUT newWord
    IF newWord length === startWord length THEN
        SET difference = CALL FUNCTION named countLetterDifferences
        IF difference === 1 && newWord matched a word in dictionary THEN
            count++
            startWord = newWord
        IF startword !== endWord THEN
            PRINT "You created the word " + startWord
            PRINT "This was try number: " + count
        ELSE IF startWord === endWord THEN
            PRINT "You made it in " + count + " tries."
ENDLOOP
END
*/





















// play();

// function play()
//     SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
//     SET variabel startOrd till "FOUR";
//     SET variabel slutordOrd till "FIVE";


// end function

// function isOneLetterApart(wordOne, wordTwo)
//     SET variabel diffCount till 0;

//     // Här behöver du skriva koden för din funktion

//     return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
// end function