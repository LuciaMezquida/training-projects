/*generatePassword(length) Una función que dada una longitud, genere un string con caracteres
aleatorios. Puedes usar un array de strings con caracteres e ir sacando caracteres 
aleatorios del array para generar una contraseña.*/

const random = (max) => {
    let number = Math.round(Math.random() * max);
    return number;
}

const generatePassword = (length) => {
    const letters = ['a', 'e', 'i', 'o', 'u', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '$', '&', '#', '@'];
    let password = '';
    for (let i = 0; i < length; i++) {
        let randomLetters = letters[random(letters.length - 1)];
        password = password + randomLetters;
    }
    return password;
}

console.log(generatePassword(8));