// Ejercicio 1
// Crea una promise que resuelva con el mensaje "Hola mundo" después de 1 segundo e imprímelo en consola.

function mensaje(message){
    return new Promise((resolve) => {
        console.log('Iniciando mensaje...')

        setTimeout(() => {
            resolve(message)
        }, 1000);


    })
}


mensaje('hola mundo')
    .then(mensaje => {
        console.log(mensaje)
    })
    .catch((error => console.log(error)))