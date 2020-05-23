/*Crea un programa que solicite al usuario un numero y compruebe si es primo o no*/

let number = parseInt(prompt("Introduce a number"));
let divider = 2;

for (divider = 2; divider < number; divider++) {
    console.log(`Checking that ${number} is divisible by ${divider}`);
    
    if (number % divider === 0) {
        console.log(`The number ${number} is not prime: is divisible by ${divider}`);
        break;
    }
}
if (divider === number) {
    console.log(`The number ${number} is prime`);
}