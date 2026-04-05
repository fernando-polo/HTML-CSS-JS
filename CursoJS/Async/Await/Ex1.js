// Crea una función async que llame a obtenerSaludo e imprima el resultado.

function obtenerSaludo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hola, bienvenido!")
        }, 1000)
    })
}


async function imprimirSaludo(){
    try {
        const res = await obtenerSaludo()
        console.log(res)
    }
    catch(error){
        console.log(error)
    }
}

imprimirSaludo()