// Ejercicio 3
    // Crea una promise que simule verificar si un usuario existe. 
    // Si el nombre es "Ana" resuelve, si no rechaza. Usa .finally para imprimir "verificación terminada" en ambos casos.


function verify_usr(user){
    return new Promise((resolve, reject) => {
        if (user != 'Ana'){
            reject('No es Ana')
        }
        else{
            resolve('Es Ana')
        }
    })
}

verify_usr('Ana2')
    .then((message) => console.log(message))
    .catch((error) => console.log(error))
    .finally(() => console.log('verificación terminada'))