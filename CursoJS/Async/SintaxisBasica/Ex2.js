// Ejercicio 2
    // Crea una promise que reciba un número. 
    // Si el número es mayor a 10 resuelve con "número válido", si no, rechaza con "número muy pequeño". 
    // Maneja ambos casos.


function num(numero){
    return new Promise((resolve, reject) => {
        if (numero < 10){
            reject('numero muy pequeño')
        }
        else{
            resolve('número valido')
        }
    })
}

num(8)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('Se completo la actividad'))