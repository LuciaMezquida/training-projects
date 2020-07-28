const telephoneCheck = (str) => {
    let regex = /^(1\s?)?((\(\d{3}\))|(\d{3}))(-?\s?)?(\d{3})(-?\s?)?(\d{4})$/;
    return regex.test(str);
   }
/*
^(1\s?)? --> Empieza (^) (o no) por 1, seguido de un espacio (o ninguno
((\(\d{3}\))|(\d{3})) --> seguido de un bloque de 3 dígitos entre parentesis o 3 dígitos (sin parentesis)
(-?\s?)? --> seguido (o no) de un guion o 0, o de un espacio o 0
(\d{3}) --> seguido de un bloque de 3 dígitos
(-?\s?)? --> seguido (o no) de un guion o 0, o de un espacio o 0
(\d{4})$ --> acabado ($) con un bloque de 4 dígitos
*/