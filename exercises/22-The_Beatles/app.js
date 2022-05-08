let lyrics = '';
const sing = (sentence) => {
    for (let sentence = 0; sentence < 12; sentence++) {
        if (sentence === 4) {
            lyrics += "whisper words of wisdom, "
        }
        else if (sentence === 10) {
            lyrics += "there will be an answer, "
        }
        else if (sentence === 11) {
            lyrics += "let it be"
        }
        else { lyrics += "let it be, " }
    }
    return lyrics
}

console.log(sing());