// Ejercicio 4
    // Encadena dos promises con .then. 
    // La primera resuelve con un número, la segunda lo multiplica por 2 e imprime el resultado.


function multNum(number){
    return new Promise((resolve, reject) => {
        if (typeof(number) !== 'number'){
            reject('No es un número')
        }
        else{
            resolve(number)
        }
    })
}

multNum(10)
    .then((numero) => numero * 2)
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
    .finally(() => console.log('Terminamos la función'))