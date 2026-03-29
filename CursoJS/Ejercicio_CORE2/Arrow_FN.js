// Convierte esta función tradicional a arrow function, primero en su forma larga y luego en la forma corta de una línea:

// function double(n) {
//   return n * 2;
// }

    const fn_double = 
        (n) => n * 2;

    console.log(fn_double(3))



// Escribe una arrow function greet que reciba un nombre y regrese "Hola, [nombre]!".

    const greet = (nombre) => `Hola, ${nombre}!`
    console.log(greet('Fernando'))


// Escribe una arrow function que reciba dos números y regrese el mayor de los dos.

    const two_num = (x, y) => x > y ? x : y
    console.log(two_num(3,4))

