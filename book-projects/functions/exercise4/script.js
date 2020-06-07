/*generateName(syllables). Un método que, dado un número de sílabas, genere un nombre
(alternar consonantes y vocales) aleatorio.*/

const random = (max) => {
    let number = Math.round(Math.random() * max);
    return number;
}

const generateName = (syllables) => {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    let name = '';
    for (let i = 0; i < syllables; i++) {
        let vowel = vowels[random(vowels.length - 1)];
        let conson = consonants[random(consonants.length - 1)];
        name = name + vowel + conson;
    }
    return name;
}

console.log(generateName(4));