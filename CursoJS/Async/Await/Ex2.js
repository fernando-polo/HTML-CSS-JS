// Crea una función async que llame a verificarEdad manejando tanto el caso exitoso como el error.
function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Acceso permitido")
            } else {
                reject("Acceso denegado, eres menor de edad")
            }
        }, 1000)
    })
}

async function acceso(){
    try{
        const res = await verificarEdad(16)
        console.log(res)
    }
    catch(error){
        console.log(error)
    }
}

acceso()